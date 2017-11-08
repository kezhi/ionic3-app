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
require('rxjs/add/operator/mergeMap');
var constants_1 = require('../../providers/constants');
/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var TaoqianggouService = (function () {
    function TaoqianggouService(http) {
        this.http = http;
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
    TaoqianggouService.prototype.getLiveIndex = function () {
        return this.http.get(constants_1.APP_SERVE_URL + '/liveIndex.api?partnerId=888')
            .map(function (res) {
            return res.json().list;
        })
            .catch(this.handleError);
    };
    TaoqianggouService.prototype.getLiveGoods = function (live) {
        return this.http.get(constants_1.APP_SERVE_URL + '/goods/getLiveGoods.api?partnerId=888&dayType=' + live.dayType + '&liveTimeId=' + live.id)
            .map(function (res) {
            return res.json().list;
        })
            .catch(this.handleError);
    };
    TaoqianggouService.prototype.handleError = function (error) {
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
    TaoqianggouService = __decorate([
        core_1.Injectable()
    ], TaoqianggouService);
    return TaoqianggouService;
}());
exports.TaoqianggouService = TaoqianggouService;
//# sourceMappingURL=taoqianggou.service.js.map