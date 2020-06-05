import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";
import {ProcessWait} from "../process_wait";

export class TimeMachine extends Model {
  public name: string;
  public time_travel_status: string;
  public genesis_time: number;
  public destination_time: number;
  public failure_code?: string;
  public failure_reason?: string;
  public error_json?: string;

  public static wait_for_time_travel_completion(): ProcessWait {
    let count = 0;
    let time_machine_retrieve = TimeMachine.retrieve("delorean");
    let ret = function (deferred, _self) {
      time_machine_retrieve.request(
      function(error, result) {
        if (error) {
          deferred.reject(error);
        } else {
          let time_machine = result.time_machine;
          if (time_machine.time_travel_status === 'succeeded') {
            deferred.resolve(result);
            } else if (time_machine.time_travel_status === 'in_progress') {
            if (count++ > 30) {
            throw new Error("The time travel is taking too much time");
            }
            setTimeout(function(){
            ret(deferred, _self);
            }, _self.env.timemachineWaitInMillis);
            } else {
            deferred.reject(result);
          }
        }
      });
    };
    return new ProcessWait(ret, ChargeBee._env);
  }

  // OPERATIONS
  //-----------

  public static retrieve(time_machine_id: string, params?: any) {
    return new RequestWrapper([time_machine_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/time_machines',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static start_afresh(time_machine_id: string, params?: _time_machine.start_afresh_params) {
    return new RequestWrapper([time_machine_id, params], {
      'methodName': 'start_afresh',
      'httpMethod': 'POST',
      'urlPrefix': '/time_machines',
      'urlSuffix': '/start_afresh',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static travel_forward(time_machine_id: string, params?: _time_machine.travel_forward_params) {
    return new RequestWrapper([time_machine_id, params], {
      'methodName': 'travel_forward',
      'httpMethod': 'POST',
      'urlPrefix': '/time_machines',
      'urlSuffix': '/travel_forward',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~TimeMachine



  // REQUEST PARAMS
  //---------------

export namespace _time_machine {
  export interface start_afresh_params {
    genesis_time?: number;
  }
  export interface travel_forward_params {
    destination_time?: number;
  }
}
