import { Injectable }    from '@angular/core';
import { Http,Response }       from '@angular/http';
import { NavParams} from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {APP_SERVE_URL,PARTNERID} from '../../../../providers/constants';

/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Injectable()
export class OrderDetailService {
  constructor(private http: Http, public navParams:NavParams) {
    console.log('Hello loginService Provider');
  }


  getOrder(token, level): Observable <string[]> {
    return this.http.get(APP_SERVE_URL+'/user/income.api?partnerId='+PARTNERID+'&token='+token+'&level='+level)
      .map(res=>{
        if(res.json().result=='OK'){
          return res.json().list;
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
