import {Result} from "./result";
import {Util} from "./util";

export class ListResult {
    public list: Result[];
    public next_offset: any;

    constructor(response) {
        this.list = [];
        this.next_offset = response.next_offset;
        if (Util.isArray(response.list)) {
            for (let res of response.list) {
                this.list.push(new Result(res));
            }
        }
        return this;
    }
}