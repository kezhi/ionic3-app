import { Injectable }    from '@angular/core';
import { Headers,Http,Response }       from '@angular/http';
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
export class FeedbackService {
  user: any;
  constructor(private http: Http, public navParams:NavParams) {
    console.log('Hello loginService Provider');
  }


  getFeedback(user): Observable <string[]> {
    return this.http.get('app/feedback/getQuests.api?partnerId=888&token='+user.token)
      .map(this.extractData)
      .catch(this.handleError);
  }

  postFeedback(good): Observable<string[]> {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let formData = 'token='+good.token+'&goodsId='+good.goodsId+'&des='+good.des+'&content='+good.content+'&type='+good.type;
    return this.http.post('app/feedback/save.api?partnerId=888', formData, {headers:headers})
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
