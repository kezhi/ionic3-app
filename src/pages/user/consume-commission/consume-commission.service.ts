import { Injectable }    from '@angular/core';
import { Http,Response }       from '@angular/http';
import { NavParams} from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {APP_SERVE_URL,PARTNERID} from '../../../providers/constants';

/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Injectable()
export class ConsumeCommissionService {
  constructor(private http: Http, public navParams:NavParams) {
    console.log('Hello loginService Provider');
  }


  getWalletNewDetail(token): Observable <string[]> {
    return this.http.get(APP_SERVE_URL+'/user/walletNewDetail.api?partnerId='+PARTNERID+'&token='+token)
      .map(res=>{
        if(res.json().result=='OK'){
          return res.json().content;
        }
      })
      .catch(this.handleError);
  }
  getConsumeCheck(token): Observable <any> {
    return this.http.get(APP_SERVE_URL+'/user/wdConsumeCheck.api?partnerId='+PARTNERID+'&token='+token)
      .map(res=>{
        if(res.json().result=='OK'){
          let result = {
            ifWd: res.json().ifWd,
            msg: res.json().msg
          };
          return result;
        }
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
