export namespace filter {
  export interface _string {
    is?: string;
    is_not?: string;
    starts_with?: string;
    is_present?: boolean;
    in?: Array<string>;
    not_in?: Array<string>;
  }

  export interface _timestamp {
    on?: number;
    before?: number;
    after?: number;
    between?: [number, number];
    is_present?: boolean
  }

  export interface _date {
    on?: number;
    before?: number;
    after?: number;
    between?: [number, number];
    is_present?: boolean
  }

  export interface _number {
    gt?: number;
    lt?: number;
    gte?: number;
    lte?: number;
    between?: [number, number];
    is?: number;
    is_not?: number;
    is_present?: number;
  }

  export interface _boolean {
    is?: boolean;
    is_present?: boolean;
  }

  export interface _enum {
    is?: any;
    is_not?: any;
    is_present?: any;
    in?: Array<any>;
    not_in?: Array<any>;
  }
}