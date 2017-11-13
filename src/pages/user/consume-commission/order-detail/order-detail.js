"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var order_detail_service_1 = require('./order-detail.service');
/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, navParams, storage, orderDetailService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.orderDetailService = orderDetailService;
        this.orderList = [];
        this.level = '1';
    }
    OrderDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad OrderDetailPage');
        this.storage.get('LoginInfo').then(function (loginInfo) {
            _this.token = loginInfo.token;
            _this.getOrder(_this.token, _this.level);
        });
    };
    OrderDetailPage.prototype.getOrder = function (token, level) {
        var _this = this;
        this.orderDetailService.getOrder(token, level).subscribe(function (res) {
            _this.orderList = res;
        });
    };
    OrderDetailPage.prototype.select = function (level) {
        this.getOrder(this.token, level);
    };
    OrderDetailPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-order-detail',
            templateUrl: 'order-detail.html',
            providers: [order_detail_service_1.OrderDetailService]
        })
    ], OrderDetailPage);
    return OrderDetailPage;
}());
exports.OrderDetailPage = OrderDetailPage;
//# sourceMappingURL=order-detail.js.map