import { Promise } from 'q'
import { Model } from './resources/model'
import { Result } from './result'
import { Util } from "./util";
import { Core } from "./core";
import { IdempotencyConstants } from "./idempotency_constants";

export class RequestWrapper<T = Result> {
    private readonly args;
    private readonly httpHeaders;
    private apiCall;
    private readonly envArg;

    constructor(args, apiCall, envArg) {
        this.args = args;
        this.apiCall = apiCall;
        this.envArg = envArg;
        this.httpHeaders = {};
        if (this.apiCall.hasIdInUrl) {
            RequestWrapper.validateIdParam(this.args[0])
        }
        
    }

    private static validateIdParam(idParam: string) {
        if (!idParam || idParam.trim().length < 1) {
            throw new Error('the required id parameter missing or wrong');
        }
        return idParam;
    }

    public headers(headers): this {
        Object.assign(this.httpHeaders, headers);
        return this;
    }

    public setIdempotencyKey(idempotencyKey: string): this {
        this.headers({ [IdempotencyConstants.IDEMPOTENCY_HEADER]: idempotencyKey });
        return this;
    }

    public param(custom_param: {[key: string]: number | string | boolean | Array<number> | Array<string>}): this {
      if (this.apiCall.hasIdInUrl) {
        this.args[1] = { ...this.args[1], ...custom_param };
      } else {
        this.args[0] = { ...this.args[0], ...custom_param };
      }
      return this;
    }

    public request(callBack=undefined, envOptions?): Promise<T> {
        let env = {};
        let jsonConstructor =  {}.constructor;
        Util.extend(true, env, this.envArg);
        if (typeof envOptions !== 'undefined') {
            Util.extend(true, env, envOptions);
        } else if(typeof callBack !== 'undefined' && callBack.constructor === jsonConstructor && !Util.isFunction(callBack)){
            Util.extend(true, env, callBack);
            callBack = undefined;
        }
        let deferred = Util.createDeferred<T>(callBack);
        let urlIdParam = this.apiCall.hasIdInUrl ? this.args[0] : null;
        let params = this.apiCall.hasIdInUrl ? this.args[1] : this.args[0];
        if (typeof callBack !== 'undefined' && !Util.isFunction(callBack)) {
            throw new Error('The callback parameter passed is incorrect.');
        }
        function callBackWrapper(err, response) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(response);
            }
        }
        Core.makeApiRequest(env, callBackWrapper, this.apiCall.httpMethod, this.apiCall.urlPrefix, this.apiCall.urlSuffix, urlIdParam, params, this.httpHeaders, this.apiCall.isListReq, this.apiCall.subDomain, this.apiCall.isOperationNeedsJsonInput, this.apiCall.jsonKeys);
        return deferred.promise;
    };
}
