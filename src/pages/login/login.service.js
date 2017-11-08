"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var constants_1 = require('../../providers/constants');
/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginService = (function () {
    // private headers = new Headers({'Content-Type': 'application/json'});
    function LoginService(http, navParams) {
        this.http = http;
        this.navParams = navParams;
        console.log('Hello loginService Provider');
    }
    //验证码登录
    LoginService.prototype.RandCodeLogin = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var formData = 'partnerId=888&mobile=' + user.mobile + '&randCode=' + user.randCode;
        console.log(user, formData);
        return this.http.post(constants_1.APP_SERVE_URL + '/user/login.api', formData, { headers: headers })
            .map(function (res) {
            var result;
            if (res.json().result == "OK") {
                result = {
                    status: 200,
                    user: res.json().user,
                    token: res.json().token
                };
            }
            else {
                result = {
                    status: 0,
                    result: res.json().result
                };
            }
            return result;
        })
            .catch(this.handleError);
    };
    LoginService.prototype.sendLoginCode = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var formData = 'partnerId=888&mobile=' + user.mobile;
        return this.http.post(constants_1.APP_SERVE_URL + '/user/sendLoginCode.api', formData, { headers: headers })
            .map(function (res) {
            console.log(res.json());
            return res.json();
        })
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    LoginService = __decorate([
        core_1.Injectable()
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map