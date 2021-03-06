import { Injectable }    from '@angular/core';
import { Http,Response }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Injectable()
export class IonProductsService {
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    console.log('Hello GoodsService Provider');
  }

  getGoodsListStyle(): Observable<string[]> {
    return this.http.get('/app/getModuleCategoryInfo.api?partnerId=888')
      .map(this.extractData)
      .catch(this.handleError);
  }
  getGoodsList(): Observable<string[]> {
    return this.http.get('/app/goods/list2.api')
      .map(this.extractData)
      .catch(this.handleError);
  }

 private extractData(res: Response) {
    let body = res.json();
    console.log(body);
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
