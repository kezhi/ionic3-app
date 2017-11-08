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
var ProductViewService = (function () {
    function ProductViewService(http, navParams) {
        this.http = http;
        this.navParams = navParams;
        console.log('Hello GoodsService Provider');
        this.proInfo = this.navParams.get('item');
        this.goodsId = this.proInfo.goodsId;
        this.goodsName = this.proInfo.goodsName;
    }
    //获取商品轮播图
    ProductViewService.prototype.getGoodImgs = function () {
        return this.http.get(constants_1.APP_SERVE_URL + '/goods/goodsPics.api?partnerId=888&goodsId=' + this.goodsId)
            .map(function (res) {
            return res.json().images;
        })
            .catch(this.handleError);
    };
    //获取商品详情介绍
    ProductViewService.prototype.getGoodDetail = function () {
        return this.http.get(constants_1.APP_SERVE_URL + '/goods/detail2.api?partnerId=888&goodsId=' + this.goodsId)
            .map(function (res) {
            return res.json().images;
        })
            .catch(this.handleError);
    };
    //获取猜你喜欢
    ProductViewService.prototype.getGoodsGuess = function () {
        return this.http.get(constants_1.APP_SERVE_URL + '/goods/list6.api?partnerId=888&neGoodsId=' + this.goodsId + '&key=' + this.goodsName)
            .map(function (res) {
            return res.json().list;
        })
            .catch(this.handleError);
    };
    ProductViewService.prototype.handleError = function (error) {
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
    ProductViewService = __decorate([
        core_1.Injectable()
    ], ProductViewService);
    return ProductViewService;
}());
exports.ProductViewService = ProductViewService;
//# sourceMappingURL=product-view.service.js.map