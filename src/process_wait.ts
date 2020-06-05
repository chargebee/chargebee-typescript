import {Util} from "./util";

export class ProcessWait {
    private readonly handler;
    private readonly _env;
    constructor(handler, envArgs) {
        if(typeof handler == 'undefined' || !Util.isFunction(handler)){
            throw new Error('The handling parameter should be a method.');
        }
        this.handler = handler;
        Util.extend(true, this._env, envArgs);
    }

    public request(callBack, envOptions?) {
        let jsonConstructor = {}.constructor;
        if (typeof envOptions !== 'undefined') {
            Util.extend(true, this._env, envOptions);
        } else if (typeof callBack !== 'undefined' && callBack.constructor === jsonConstructor && !Util.isFunction(callBack)) {
            Util.extend(true, this._env, callBack);
            callBack = undefined;
        }
        if (typeof callBack !== 'undefined' && !Util.isFunction(callBack)) {
            throw new Error('The callback parameter passed is incorrect.');
        }
        let deferred = Util.createDeferred(callBack);
        let _self = this;
        this.handler(deferred, _self);

        return deferred.promise;
    }
}