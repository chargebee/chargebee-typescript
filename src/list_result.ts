import {Result} from "./result";
import {Util} from "./util";
import {Core} from "./core";

export class ListResult {
    public list: Result[];
    public next_offset: any;
    readonly responseHeaders: any;

    constructor(response, responseHeaders?) {
      this.list = [];
      this.next_offset = response.next_offset;
      
      if (Util.isArray(response.list)) {
        for (let res of response.list) {
          this.list.push(new Result(res));
        }
      }
      
      if (responseHeaders) {
        this.responseHeaders = responseHeaders;
      }
     return this;
    }

    getResponseHeaders(){
        return this.responseHeaders;
    }
}