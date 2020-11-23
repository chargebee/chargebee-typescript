import { Util } from "./util";
import { Core } from "./core";

export class RequestWrapper {
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

    private static validateIdParam(idParam: any) {
        if (typeof idParam === 'undefined' || typeof idParam !== 'string' || idParam.toString().trim() < 1) {
            throw new Error('the required id parameter missing or wrong');
        }
        return idParam;
    }

    public headers(headers): this {
        Object.assign(this.httpHeaders, headers);
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

    public request(callBack, envOptions?): Q.Promise<any> {
        let env = {};
        let jsonConstructor =  {}.constructor;
        Util.extend(true, env, this.envArg);
        if (typeof envOptions !== 'undefined') {
            Util.extend(true, env, envOptions);
        } else if(typeof callBack !== 'undefined' && callBack.constructor === jsonConstructor && !Util.isFunction(callBack)){
            Util.extend(true, env, callBack);
            callBack = undefined;
        }
        let deferred = Util.createDeferred(callBack);
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
        Core.makeApiRequest(env, callBackWrapper, this.apiCall.httpMethod, this.apiCall.urlPrefix, this.apiCall.urlSuffix, urlIdParam, params, this.httpHeaders, this.apiCall.isListReq);
        return deferred.promise;
    };
}

