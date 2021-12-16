import {Util} from './util';
import {Result} from "./result";
import {ListResult} from './list_result';

type Callback = (error: any, success: ListResult | Result) => any

export class Core {
    private static http = require('http');
    private static https = require('https');
    private static os = require('os')

    static timeoutHandler = function (req, callBack: Callback, env) {
        return function() {
            req._isAborted = true;
            req.abort();
            Core.throwError(
              callBack,
              'io_error',
              504,
              'timeout',
              'request aborted due to timeout.',
              undefined,
              env.useErrorObject
            );
        }
    }

    static responseHandler(req, callBack: Callback, env) {
        return function(res) {
            let response: any = '';
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                response += chunk;
            });
            res.on('end', function() {
                try {
                    response = JSON.parse(response);
                } catch (e) {
                    Core.throwError(
                      callBack,
                      'client_error',
                      500,
                      'invalid_json',
                      'invalid json in response. Probably not a ChargeBee response',
                      e,
                      env.useErrorObject
                    );
                }
                if (res.statusCode < 200 || res.statusCode > 299) {
                    response.http_status_code = res.statusCode;
                    callBack(response, null);
                } else {
                    if ('list' in response) {
                        response = new ListResult(response);
                    } else {
                        response = new Result(response);
                    }
                    callBack(null, response);
                }
            });
        };
    }

    static errorHandler(req, callBack: Callback, env) {
        return function(error) {
            if (req._isAborted)
                return;
            Core.throwError(
              callBack,
              'io_error',
              503,
              'connection_error',
              'connection error while making request.',
              error,
              env.useErrorObject
            );
        }
    }

    static makeApiRequest(env, callBack: Callback, httpMethod, urlPrefix, urlSuffix, urlIdParam, params, headers, isListReq) {
        let path = this.getApiURL(env, urlPrefix, urlSuffix, urlIdParam);
        if (typeof params === 'undefined' || params === null) {
            params = {};
        }
        if (httpMethod === 'GET') {
            params = this.serialize(params)
            let queryParam = isListReq ? this.encodeListParams(params) : this.encodeParams(params);
            path += "?" + queryParam;
            params = {};
        }
        let data = this.encodeParams(params);
        let protocol = (env.protocol === 'http' ? this.http : this.https);

        Util.extend(true, headers, {
            'Authorization': 'Basic ' + Buffer.from(env.api_key + ':').toString('base64'),
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            "Content-Length": data.length,
            'User-Agent': "Chargebee-Typescript-Client " + env.clientVersion,
            'Lang-Version': process.version,
            'OS-Version': this.os.platform() + " " + this.os.arch() + " " + this.os.release()
        });

        let req = protocol.request({
            "hostname": this.getHost(env),
            "path": path,
            "method": httpMethod,
            "port": env.port,
            "headers": headers
        });
        req.setTimeout(env.timeout, this.timeoutHandler(req, callBack, env));
        req.on('response', this.responseHandler(req, callBack, env));
        req.on('error', this.errorHandler(req, callBack, env));
        req.write(data);
        req.end();
    };

    static getApiURL(env, urlPrefix, urlSuffix, urlIdParam) {
        if (typeof env.api_key === 'undefined' || typeof env.site === 'undefined') {
            throw new Error('Your site or api key is not configured.');
        }
        return   env.apiPath + urlPrefix + (urlIdParam !== null ? //
            '/' + encodeURIComponent(urlIdParam).replace(/%2F/g,'/') : '') + (urlSuffix !== null ? urlSuffix : '');
    }

    static getHost(env) {
        return env.site + env.hostSuffix;
    }

    static serialize(paramObj) {
        let key, value;
        let array_ops = ["in", "not_in", "between"];
        for (key in paramObj) {
            value = paramObj[key];
            if (typeof value === 'object' && Util.isObject(value)) {
                let old_key = key;
                let child_key;
                for (child_key in value) {
                    key = key + "[" + child_key + "]";
                    paramObj[key] = value[child_key];
                    if (array_ops.includes(child_key)) {
                        paramObj[key]=JSON.stringify(value[child_key]);
                    }
                }
                delete paramObj[old_key];
                this.serialize(paramObj);
            } else {
                paramObj[key] = value;
            }
        }
        return paramObj;
    }

    static encodeListParams(paramObj) {
        return this.encodeParams(paramObj);
    }

    static encodeParams(paramObj, serialized?, scope?, index?) {
        let key, value;
        if (typeof serialized === 'undefined' || serialized === null) {
            serialized = [];
        }
        for (key in paramObj) {
            value = paramObj[key]
            if (scope) {
                key = "" + scope + "[" + key + "]"
            }
            if (typeof index !== 'undefined' && index !== null) {
                key = key + "[" + index + "]"
            }

            if (Util.isArray(value)) {
                for (let arrIdx = 0; arrIdx < value.length; arrIdx++) {
                    if (typeof value[arrIdx] === 'object' || Util.isArray(value[arrIdx])) {
                        this.encodeParams(value[arrIdx], serialized, key, arrIdx)
                    } else {
                        if (typeof value[arrIdx] !== 'undefined') {
                            serialized.push(encodeURIComponent(key + "[" + arrIdx + "]") + "=" + encodeURIComponent(Util.trim(value[arrIdx]) !== '' ? value[arrIdx] : ''));
                        }
                    }
                }
            } else if(key === "meta_data") {
                let attrVal="";
                if(value !== null) {
                    attrVal = encodeURIComponent(Object.prototype.toString.call(value) === "[object String]" ? Util.trim(value) : JSON.stringify(value));
                }
                serialized.push(encodeURIComponent(key) + "=" + attrVal);
            } else if (typeof value === 'object' && !Util.isArray(value)) {
                this.encodeParams(value, serialized, key);
            } else {
                if (typeof value !== 'undefined') {
                    serialized.push(encodeURIComponent(key) + "=" + encodeURIComponent(Util.trim(value) !== '' ? value : ''));
                }
            }
        }

        return serialized.join('&').replace(/%20/g, '+')
    }

    static throwError(callBack: Callback, type: string, httpStatusCode: number, errorCode: string, message: string, detail?: any, useErrorObject?: boolean) {
        let error

        if (useErrorObject) {
            error = new CoreError(
              message,
              type,
              httpStatusCode,
              errorCode,
              detail
            )
        } else {
            error = {
                'message': message,
                'type': type,
                'api_error_code': errorCode,
                'http_status_code': httpStatusCode,

                'http_code': httpStatusCode,
                'error_code': errorCode,
            };

            if (typeof detail !== "undefined") {
                error['detail'] = detail;
            }
        }

        return callBack(error, null);
    }
}
