import { Injectable }    from '@angular/core';
import { Http,Response }       from '@angular/http';
import { NavParams } from 'ionic-angular';

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
export class ListService {
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, public navParams: NavParams) {
    console.log('Hello GoodsService Provider');
  }

  getGoodsList(sortObj): Observable<string[]> {
    console.log(sortObj);
    /*if(this.navParams.get('mainNav')){
      let param = this.navParams.get('mainNav');
      let listUrl = param.link+'?st='+sortObj.st+'&ifSuperDiscount='+sortObj.ifSuperDiscount+'&sortType='+sortObj.sortType;
    }else{
      let listUrl = 'goods/list2.api?partnerId=888&st='+sortObj.st+'&ifSuperDiscount='+sortObj.ifSuperDiscount+'&sortType='+sortObj.sortType;
    }*/
    let listUrl;
    if(sortObj.catId){
      listUrl = 'goods/list2.api?partnerId=888&st='+sortObj.st+'&sortType='+sortObj.sortType+'&catId='+sortObj.catId;
    }else if(sortObj.ifSuperDiscount){
      console.log('超级划算')
      listUrl = 'goods/list2.api?partnerId=888&st='+sortObj.st+'&ifSuperDiscount='+sortObj.ifSuperDiscount+'&sortType='+sortObj.sortType;
    }else if(!sortObj.params){
      console.log('params为空');
      let param = this.navParams.get('mainNav');
      listUrl = param.link+'?st='+sortObj.st+'&sortType='+sortObj.sortType;
    }else{
      console.log('params有值');
      let param = this.navParams.get('mainNav');
      for(var i in sortObj.params){
        listUrl = param.link+'?st='+sortObj.st+'&sortType='+sortObj.sortType+'&'+i+'='+sortObj.params[i];
      }
    }
    return this.http.get('/app/'+listUrl)
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
