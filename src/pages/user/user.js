"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_service_1 = require("./user.service");
var UserPage = (function () {
    function UserPage(navCtrl, modalCtrl, storage, actionSheetCtrl, events, globalData, userService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.globalData = globalData;
        this.userService = userService;
    }
    UserPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ifLogin();
        this.events.subscribe('user:login', function (loginInfo) {
            var userInfo = loginInfo.user;
            _this.globalData.userId = userInfo.id;
            _this.globalData.username = userInfo.name;
            _this.globalData.role = userInfo.role;
        });
    };
    UserPage.prototype.ifLogin = function () {
        var _this = this;
        this.storage.get('LoginInfo').then(function (loginInfo) {
            console.log(loginInfo);
            if (loginInfo && loginInfo.token) {
                _this.token = loginInfo.token;
                console.log('111', _this.token);
                _this.userInfo = loginInfo && loginInfo.user ? loginInfo.user : null;
                // 获取佣金,代理,团队等数据
                _this.getMyInfo(_this.token);
            }
            else {
                var loginModal = _this.modalCtrl.create('LoginPage', { page: 'UserPage' });
                loginModal.present();
            }
        });
    };
    UserPage.prototype.ionViewDidLoad = function () {
    };
    // 获取代理佣金,消费佣金,我的团队数据
    UserPage.prototype.getMyInfo = function (token) {
        var _this = this;
        this.userService.getMyInfo(token).subscribe(function (res) {
            console.log(res);
            _this.myInfo = res;
        });
    };
    //去代理佣金
    UserPage.prototype.pushAgent = function () {
        this.navCtrl.push('AgentCommissionPage');
    };
    //去分享好友
    UserPage.prototype.pushShare = function () {
        this.navCtrl.push('ShareFriendsPage');
    };
    //去加入代理
    UserPage.prototype.pushJoin = function () {
        this.navCtrl.push('JoinAgencyPage');
    };
    //去排行榜
    UserPage.prototype.pushRank = function () {
        this.navCtrl.push('RankingListPage');
    };
    //去关于我们
    UserPage.prototype.pushAbout = function () {
        this.navCtrl.push('AboutPage');
    };
    //去客服中心
    UserPage.prototype.pushService = function () {
        this.navCtrl.push('ServiceCenterPage');
    };
    //去头像昵称设置
    UserPage.prototype.pushSetting = function () {
        this.navCtrl.push('SettingPage');
    };
    UserPage = __decorate([
        core_1.Component({
            selector: 'page-user',
            templateUrl: 'user.html',
            providers: [user_service_1.UserService]
        })
    ], UserPage);
    return UserPage;
}());
exports.UserPage = UserPage;
//# sourceMappingURL=user.js.map