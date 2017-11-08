"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var constants_1 = require('../../../providers/constants');
var tabs_1 = require('../../tabs/tabs');
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, storage, modalCtrl, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.logo = constants_1.LOGO;
        this.appVersion = constants_1.APP_VERSION;
        this.appName = constants_1.APP_NAME;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.feedback = function () {
        var _this = this;
        this.storage.get('LoginInfo').then(function (loginInfo) {
            console.log(loginInfo.user.mobile);
            if (loginInfo.token) {
                _this.navCtrl.push('FeedbackPage');
            }
            else {
                var loginModal = _this.modalCtrl.create('LoginPage');
                loginModal.present();
            }
        });
    };
    AboutPage.prototype.exit = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '提示',
            message: '确定要退出账户吗?',
            buttons: [
                {
                    text: '确定',
                    handler: function () {
                        _this.storage.clear();
                        var loginModal = _this.modalCtrl.create('LoginPage', { page: 'HomePage' });
                        loginModal.present();
                        _this.navCtrl.setRoot(tabs_1.TabsPage);
                    }
                },
                {
                    text: '取消',
                    handler: function () {
                        console.log('取消');
                    }
                }
            ]
        });
        confirm.present();
    };
    AboutPage.prototype.clearCache = function () {
        var loader = this.loadingCtrl.create({
            content: "正在清除...",
            duration: 1000
        });
        loader.present();
    };
    AboutPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-about',
            templateUrl: 'about.html'
        })
    ], AboutPage);
    return AboutPage;
}());
exports.AboutPage = AboutPage;
//# sourceMappingURL=about.js.map