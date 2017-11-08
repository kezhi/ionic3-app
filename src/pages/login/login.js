"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var tabs_1 = require('../tabs/tabs');
var login_service_1 = require('./login.service');
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, loginService, formBuilder, events, toastCtrl, storage, globalData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.globalData = globalData;
        this.submitted = false;
        /*this.loginForm = this.formBuilder.group({
          mobile: ['15811012797', [Validators.required, Validators.minLength(4)]],// 第一个参数是默认值
          randCode: ['867867', [Validators.required, Validators.minLength(4)]]
        });*/
        // this.user = {mobile:mobile,randCode:randCode};
        this.mobile = '15811012797';
        this.randCode = '8012';
        console.log(this.navParams.get('page'));
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('LoginInfo').then(function (loginInfo) {
            _this.userInfo = loginInfo && loginInfo.user ? loginInfo.user : null;
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goLogin = function (mobile, randCode) {
        var _this = this;
        console.log(mobile, randCode);
        var user = {
            mobile: mobile,
            randCode: randCode
        };
        this.loginService.RandCodeLogin(user).subscribe(function (loginInfo) {
            console.log(loginInfo);
            var info = loginInfo;
            if (info.status == 200) {
                _this.storage.remove('loginInfo'); //清除缓存
                _this.submitted = false;
                _this.globalData.token = info.token;
                _this.events.publish('user:login', loginInfo);
                _this.storage.set('LoginInfo', loginInfo);
                _this.viewCtrl.dismiss(loginInfo);
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: info.result,
                    duration: 2000
                });
                toast.present();
            }
        }, function () {
            _this.submitted = false;
        });
    };
    // 获取验证码
    LoginPage.prototype.getCode = function (mobile) {
        this.loginService.sendLoginCode(mobile).subscribe(function (res) {
            console.log(res);
        });
    };
    // 登录方式
    LoginPage.prototype.loginMethod = function (type) {
        if (type == 0) {
            // 游客登录
            this.viewCtrl.dismiss();
            this.navCtrl.setRoot(tabs_1.TabsPage);
        }
        else {
        }
    };
    LoginPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-login',
            templateUrl: 'login.html',
            providers: [login_service_1.LoginService]
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.js.map