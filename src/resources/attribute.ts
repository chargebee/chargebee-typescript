import {Model} from "./model";
import { Api } from './api'

export class Attribute extends Model {
  public name: string;
  public value: string;
}

// OPERATIONS
//-----------
export class AttributeApi extends Api {
} // ~Attribute



  // REQUEST PARAMS
  //---------------

export namespace _attribute {
}
