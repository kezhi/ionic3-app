import { Injectable }    from '@angular/core';
import { Http,Response }       from '@angular/http';
import { NavController, NavParams} from 'ionic-angular';

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
export class ProductViewService {
  // private headers = new Headers({'Content-Type': 'application/json'});

  proInfo: any;   //商品详情
  goodsId: string;  //商品ID
  goodsName: string;  //商品名称
  constructor(private http: Http, public navParams:NavParams) {
    console.log('Hello GoodsService Provider');
    this.proInfo = this.navParams.get('item');
    this.goodsId = this.proInfo.goodsId;
    this.goodsName = this.proInfo.goodsName;
  }


  //获取商品轮播图
  getGoodImgs(): Observable<string[]> {

    return this.http.get('app/goods/goodsPics.api?partnerId=888&goodsId='+ this.goodsId)
      .map(this.extractData)
      .catch(this.handleError);
  }
  //获取商品详情介绍
  getGoodDetail(): Observable<string[]> {
    return this.http.get('/app/goods/detail2.api?partnerId=888&goodsId='+ this.goodsId)
      .map(this.extractData)
      .catch(this.handleError);
  }
  //获取猜你喜欢
  getGoodsGuess(): Observable<string[]> {
    return this.http.get('/app/goods/detail6.api?partnerId=888&neGoodsId='+ this.goodsId + '&key=' + this.goodsName)
      .map(this.extractData)
      .catch(this.handleError);
  }

 private extractData(res: Response) {
    console.log(res);
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
