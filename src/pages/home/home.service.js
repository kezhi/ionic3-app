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
var HomeService = (function () {
    // private headers = new Headers({'Content-Type': 'application/json'});
    function HomeService(http) {
        this.http = http;
        console.log('Hello GoodsService Provider');
    }
    HomeService.prototype.getGoodsListStyle = function () {
        return this.http.get(constants_1.APP_SERVE_URL + '/getModuleCategoryInfo.api?partnerId=888')
            .map(function (res) {
            return res.json().list;
        })
            .catch(this.handleError);
    };
    HomeService.prototype.getGoodsList = function (sortObj) {
        var url;
        if (sortObj.st >= 2) {
            url = constants_1.APP_SERVE_URL + '/goods/list2.api?partnerId=888&st=' + sortObj.st;
        }
        else {
            url = constants_1.APP_SERVE_URL + '/index.api?partnerId=888';
        }
        return this.http.get(url)
            .map(function (res) {
            var result = {
                list: res.json().list,
                bannerList: res.json().bannerList,
                catList: res.json().catList
            };
            return result;
        })
            .catch(this.handleError);
    };
    HomeService.prototype.getCatList = function (catObj) {
        var url = constants_1.APP_SERVE_URL + '/goods/list2.api?partnerId=888&catId=' + catObj.id + '&st=' + catObj.st;
        return this.http.get(url)
            .map(function (res) {
            return res.json().list;
        })
            .catch(this.handleError);
    };
    HomeService.prototype.handleError = function (error) {
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
    HomeService = __decorate([
        core_1.Injectable()
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map