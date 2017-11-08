"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, storage, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SettingPage');
        this.storage.get('LoginInfo').then(function (loginInfo) {
            if (loginInfo && loginInfo.token) {
                _this.userInfo = loginInfo.user;
                console.log(_this.userInfo);
            }
        });
    };
    SettingPage.prototype.settingAvatar = function () {
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '相机',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: '相册',
                    role: '',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SettingPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-setting',
            templateUrl: 'setting.html'
        })
    ], SettingPage);
    return SettingPage;
}());
exports.SettingPage = SettingPage;
//# sourceMappingURL=setting.js.map