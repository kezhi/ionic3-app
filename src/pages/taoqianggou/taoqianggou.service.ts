import { Injectable }    from '@angular/core';
import { Http,Response }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {APP_SERVE_URL} from '../../providers/constants';

/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Injectable()
export class TaoqianggouService {
  liveIndex: any[];
  constructor(private http: Http,) {
    console.log('Hello GoodsService Provider');
  }


  /*getLiveIndex(): Observable<string[]> {
    this.http.get('app/liveIndex.api?partnerId=888')
      .map(res => res.json()).mergeMap(result => {
        let resultList = result.list;
        resultList.forEach(function (live) {
          if(live.ifLiving == 1){
            this.http.get('app/getLiveGoods.api?partnerId=888&dayType='+live.dayType+'&liveTimeId='+live.id)
              .map(this.extractData)
          }
        });
      })//.subscribe(rel => {console.log(rel)})
      // .catch(this.handleError);
  }*/
  /*getLiveIndex(): Observable<string[]> {
    return this.http.get('app/liveIndex.api?partnerId=888')
      .map(this.extractData)
      .catch(this.handleError);
  }*/

  getLiveIndex(): Observable<string[]> {
    return this.http.get(APP_SERVE_URL+'/liveIndex.api?partnerId=888')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getLiveGoods(live): Observable<string[]> {
    return this.http.get(APP_SERVE_URL+'/goods/getLiveGoods.api?partnerId=888&dayType='+live.dayType+'&liveTimeId='+live.id)
      .map(this.extractData)
      .catch(this.handleError);
  }

 private extractData(res: Response) {
    let body = res.json();
    return body || { };
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
