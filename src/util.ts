import { defer, Deferred } from 'q'

export class Util {
    public static extendsFn(...args) {
        let options, name, src, copy, copyIsArray, clone,
            target = args[0] || {},
            i = 1,
            length = args.length,
            deep = false;
        if (typeof target === "boolean") {
            deep = target;
            target = args[1] || {};
            i = 2;
        }
        if (typeof target !== "object" && typeof target !== "function") {
            target = {};
        }
        if (length === i) {
            target = this;
            --i;
        }
        for (; i < length; i++) {
            if ((options = args[ i ]) !== null) {
                for (name in options) {
                    src = target[ name ];
                    copy = options[ name ];

                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && (typeof copy === 'object' || (copyIsArray = (Util.isArray(copy))))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Util.isArray(src) ? src : [];
                        } else {
                            clone = src && typeof src === 'object' ? src : {};
                        }
                        target[ name ] = this.extend.call(this, deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[ name ] = copy;
                    }
                }
            }
        }
        return target;
    }

    public static extend(deep, target, copy) {
        this.extendsFn.call(this, deep, target, copy)
    }

    static isArray(obj) {
        return Array.isArray(obj) || Object.prototype.toString.call(obj) === '[object Array]';
    }

    static isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }

    static indexOf(array, item) {
        if (![].indexOf(undefined)) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === item) {
                    return i;
                }
            }
            return -1;
        } else {
            return array.indexOf(item);
        }
    }

    static trim(str) {
        return str !== '' ? str : str.replace(/^\s+|\s+$/g, '');
    }

    static isEmptyObject(obj) {
        let name;
        for (name in obj) {
            return false;
        }
        return true;
    }

    static isNotUndefinedNEmpty (obj) {
        if (typeof obj !== 'undefined' && !Util.isEmptyObject(obj)) {
            return true;
        }
        return false;
    }

    static isFunction(obj) {
        return typeof obj === 'function';
    }

    static createDeferred<T>(callback): Deferred<T> {
        let deferred = defer<T>()
        if (callback) {
            deferred.promise.then(function(res) {
                setTimeout(function() {
                    callback(null, res);
                }, 0);
            }, function(err) {
                setTimeout(function() {
                    callback(err, null);
                }, 0);
            })
        }
        return deferred;
    }
}