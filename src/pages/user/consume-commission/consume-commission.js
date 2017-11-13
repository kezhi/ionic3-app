"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var consume_commission_service_1 = require('./consume-commission.service');
var tabs_1 = require('../../tabs/tabs');
/**
 * Generated class for the ConsumeCommissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConsumeCommissionPage = (function () {
    function ConsumeCommissionPage(navCtrl, storage, navParams, toastCtrl, consumeCommissionService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.consumeCommissionService = consumeCommissionService;
        this.value = '0';
    }
    ConsumeCommissionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ConsumeCommissionPage');
        this.storage.get('LoginInfo').then(function (loginInfo) {
            _this.token = loginInfo.token;
            // 获取佣金,代理,团队等数据
            console.log(_this.token);
            _this.getWalletNewDetail(_this.token);
        });
    };
    ConsumeCommissionPage.prototype.getWalletNewDetail = function (token) {
        var _this = this;
        this.consumeCommissionService.getWalletNewDetail(token).subscribe(function (res) {
            _this.consumeCommission = res;
        });
    };
    // 选择tab
    ConsumeCommissionPage.prototype.pushOrderDetail = function () {
        this.navCtrl.push('OrderDetailPage');
    };
    ConsumeCommissionPage.prototype.pushGetMoney = function (money) {
        var _this = this;
        if (money > 0) {
            // 去提现
            this.consumeCommissionService.getConsumeCheck(this.token).subscribe(function (res) {
                var result = res;
                if (result.ifWd == 0) {
                    var toast = _this.toastCtrl.create({
                        message: result.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                }
            });
        }
        else {
            // 去赚钱
            this.navCtrl.setRoot(tabs_1.TabsPage);
        }
    };
    ConsumeCommissionPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-consume-commission',
            templateUrl: 'consume-commission.html',
            providers: [consume_commission_service_1.ConsumeCommissionService]
        })
    ], ConsumeCommissionPage);
    return ConsumeCommissionPage;
}());
exports.ConsumeCommissionPage = ConsumeCommissionPage;
//# sourceMappingURL=consume-commission.js.map