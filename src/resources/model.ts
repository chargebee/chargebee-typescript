import * as resources from '../resources'
import {Util} from "../util";

export class Model {
    readonly #_values: any;
    readonly #_sub_types: any;
    readonly #_dependant_types: any;

    get values() {
        return this.#_values;
    }

    get sub_types() {
        return this.#_sub_types;
    }

    get dependant_types() {
        return this.#_dependant_types;
    }

    constructor(_values, _sub_types = {}, _dependant_types = {}) {
        this.#_values = _values;
        this.#_sub_types = _sub_types;
        this.#_dependant_types = _dependant_types;
        this.load(this.values);
    }

    private load(values) {
        for (const k in values) {
            let v = values[k];
            let set_val = v;

            if (Util.isObject(v) && this.dependant_types[k]) {
                continue;
            } else if (Util.isObject(v)) {
                set_val = this.sub_types[k] ? new (resources)[this.sub_types[k]](v) : v;
            } else if (Util.isArray(v)) {
                if (!Util.isEmptyObject(this.sub_types[k])) {
                    let set_vals = [];
                    for(let item of v) {
                        set_vals.push(new (resources)[this.sub_types[k]](item));
                    }
                    set_val = set_vals
                } else {
                    set_val = v;
                }
            }
            this[k] = set_val;
        }
    }

    public init_dependant(obj, type, sub_types = {}) {
        if(!Util.isEmptyObject(obj) && Util.isObject(obj) && !Util.isEmptyObject(this.dependant_types[type])) {
            this[type] = new (resources)[this.dependant_types[type]](obj[type], sub_types);
        }
    }

    public init_dependant_list(obj, type, sub_types = {}) {
        if(!Util.isEmptyObject(obj) && !Util.isEmptyObject(obj[type]) && Util.isArray(obj[type]) && !Util.isEmptyObject(this.dependant_types[type])) {
            let dependant_objs = [];

            for(let dt of obj[type]) {
                dependant_objs.push(new (resources)[this.dependant_types[type]](dt, sub_types));
            }
            this[type] = dependant_objs;
        }
    }

    private toString(...args) {
        return JSON.stringify(this.values, null, 2);
    }
}
