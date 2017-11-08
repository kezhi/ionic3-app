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
var ListService = (function () {
    // private headers = new Headers({'Content-Type': 'application/json'});
    function ListService(http, navParams) {
        this.http = http;
        this.navParams = navParams;
        console.log('Hello GoodsService Provider');
    }
    ListService.prototype.getGoodsList = function (sortObj) {
        console.log(sortObj);
        /*if(this.navParams.get('mainNav')){
          let param = this.navParams.get('mainNav');
          let listUrl = param.link+'?st='+sortObj.st+'&ifSuperDiscount='+sortObj.ifSuperDiscount+'&sortType='+sortObj.sortType;
        }else{
          let listUrl = 'goods/list2.api?partnerId=888&st='+sortObj.st+'&ifSuperDiscount='+sortObj.ifSuperDiscount+'&sortType='+sortObj.sortType;
        }*/
        var listUrl;
        if (sortObj.catId) {
            listUrl = 'goods/list2.api?partnerId=888&st=' + sortObj.st + '&sortType=' + sortObj.sortType + '&catId=' + sortObj.catId;
        }
        else if (sortObj.ifSuperDiscount) {
            console.log('超级划算');
            listUrl = 'goods/list2.api?partnerId=888&st=' + sortObj.st + '&ifSuperDiscount=' + sortObj.ifSuperDiscount + '&sortType=' + sortObj.sortType;
        }
        else if (!sortObj.params) {
            console.log('params为空');
            var param = this.navParams.get('mainNav');
            listUrl = param.link + '?st=' + sortObj.st + '&sortType=' + sortObj.sortType;
        }
        else {
            console.log('params有值');
            var param = this.navParams.get('mainNav');
            for (var i in sortObj.params) {
                listUrl = param.link + '?st=' + sortObj.st + '&sortType=' + sortObj.sortType + '&' + i + '=' + sortObj.params[i];
            }
        }
        return this.http.get(constants_1.APP_SERVE_URL + '/' + listUrl)
            .map(function (res) {
            return res.json().list;
        })
            .catch(this.handleError);
    };
    ListService.prototype.handleError = function (error) {
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
    ListService = __decorate([
        core_1.Injectable()
    ], ListService);
    return ListService;
}());
exports.ListService = ListService;
//# sourceMappingURL=list.service.js.map