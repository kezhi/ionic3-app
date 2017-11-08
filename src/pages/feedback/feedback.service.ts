import { Injectable }    from '@angular/core';
import { Headers,Http,Response }       from '@angular/http';
import { NavParams} from 'ionic-angular';

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
export class FeedbackService {
  user: any;
  constructor(private http: Http, public navParams:NavParams) {
    console.log('Hello loginService Provider');
  }


  getFeedback(user): Observable <string[]> {
    return this.http.get(APP_SERVE_URL+'/feedback/getQuests.api?partnerId=888&token='+user.token)
      .map(res=>{
        return res.json().list;
      })
      .catch(this.handleError);
  }

  postFeedback(good): Observable<string[]> {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let formData = 'partnerId=888'+'&token='+good.token+'&goodsId='+good.goodsId+'&des='+good.des+'&content='+good.content+'&type='+good.type;
    return this.http.post(APP_SERVE_URL+'/feedback/save.api', formData, {headers:headers})
      .map(res=>{return res.json()})
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
