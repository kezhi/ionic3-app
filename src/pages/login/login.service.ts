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
export class LoginService {
  // private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, public navParams:NavParams) {
    console.log('Hello loginService Provider');

  }


  //验证码登录
  RandCodeLogin(user): Observable<string[]> {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let formData = 'partnerId=888&mobile='+user.mobile+'&randCode='+user.randCode;
    console.log(user, formData);
    return this.http.post('app/user/login.api',formData,{headers:headers})
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
