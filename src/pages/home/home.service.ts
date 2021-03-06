import { Injectable }    from '@angular/core';
import { Http,Response }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {APP_SERVE_URL} from '../../providers/constants';


/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Injectable()
export class HomeService {
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
    console.log('Hello GoodsService Provider');
  }

  getGoodsListStyle(): Observable<string[]> {
    return this.http.get(APP_SERVE_URL+'/getModuleCategoryInfo.api?partnerId=888')
      .map(res =>{
        return res.json().list;
      })
      .catch(this.handleError);
  }

  getGoodsList(sortObj): Observable<string[]> {
    let url;
    if(sortObj.st >=2){
      url = APP_SERVE_URL+'/goods/list2.api?partnerId=888&st='+sortObj.st;
    }else{
      url = APP_SERVE_URL+'/index.api?partnerId=888';
    }
    return this.http.get(url)
      .map(res =>{
        let result = {
          list: res.json().list,
          bannerList: res.json().bannerList,
          catList: res.json().catList
        };
        return result;
      })
      .catch(this.handleError);
  }
  getCatList(catObj): Observable<string[]> {
    let url = APP_SERVE_URL+'/goods/list2.api?partnerId=888&catId='+catObj.id+'&st='+catObj.st;
    return this.http.get(url)
      .map(res =>{
        return res.json().list;
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
