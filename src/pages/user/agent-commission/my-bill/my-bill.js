"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var my_bill_service_1 = require('./my-bill.service');
/**
 * Generated class for the MyBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyBillPage = (function () {
    function MyBillPage(navCtrl, storage, navParams, myBillService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.myBillService = myBillService;
        this.myBillList = [];
    }
    MyBillPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyBillPage');
        this.storage.get('LoginInfo').then(function (loginInfo) {
            console.log(loginInfo);
            if (loginInfo && loginInfo.token) {
                _this.token = loginInfo.token;
                _this.myBillService.getBalance(_this.token).subscribe(function (res) {
                    _this.myBillList = res;
                });
            }
        });
    };
    MyBillPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-my-bill',
            templateUrl: 'my-bill.html',
            providers: [my_bill_service_1.MyBillService]
        })
    ], MyBillPage);
    return MyBillPage;
}());
exports.MyBillPage = MyBillPage;
//# sourceMappingURL=my-bill.js.map