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
var constants_1 = require('../../../providers/constants');
/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ConsumeCommissionService = (function () {
    function ConsumeCommissionService(http, navParams) {
        this.http = http;
        this.navParams = navParams;
        console.log('Hello loginService Provider');
    }
    ConsumeCommissionService.prototype.getWalletNewDetail = function (token) {
        return this.http.get(constants_1.APP_SERVE_URL + '/user/walletNewDetail.api?partnerId=' + constants_1.PARTNERID + '&token=' + token)
            .map(function (res) {
            if (res.json().result == 'OK') {
                return res.json().content;
            }
        })
            .catch(this.handleError);
    };
    ConsumeCommissionService.prototype.getConsumeCheck = function (token) {
        return this.http.get(constants_1.APP_SERVE_URL + '/user/wdConsumeCheck.api?partnerId=' + constants_1.PARTNERID + '&token=' + token)
            .map(function (res) {
            if (res.json().result == 'OK') {
                var result = {
                    ifWd: res.json().ifWd,
                    msg: res.json().msg
                };
                return result;
            }
        })
            .catch(this.handleError);
    };
    ConsumeCommissionService.prototype.handleError = function (error) {
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
    ConsumeCommissionService = __decorate([
        core_1.Injectable()
    ], ConsumeCommissionService);
    return ConsumeCommissionService;
}());
exports.ConsumeCommissionService = ConsumeCommissionService;
//# sourceMappingURL=consume-commission.service.js.map