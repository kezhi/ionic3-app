"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var my_group_service_1 = require('./my-group.service');
/**
 * Generated class for the MyGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyGroupPage = (function () {
    function MyGroupPage(navCtrl, navParams, storage, myGroupService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.myGroupService = myGroupService;
        this.level = '1';
        this.myGroupList = [];
    }
    MyGroupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyGroupPage');
        this.storage.get('LoginInfo').then(function (loginInfo) {
            _this.token = loginInfo.token;
            _this.getMyGroup(_this.token, _this.level);
        });
    };
    MyGroupPage.prototype.getMyGroup = function (token, level) {
        var _this = this;
        this.myGroupService.getMyGroup(token, level).subscribe(function (res) {
            _this.myGroupList = res;
        });
    };
    MyGroupPage.prototype.select = function (level) {
        this.getMyGroup(this.token, level);
    };
    MyGroupPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-my-group',
            templateUrl: 'my-group.html',
            providers: [my_group_service_1.MyGroupService]
        })
    ], MyGroupPage);
    return MyGroupPage;
}());
exports.MyGroupPage = MyGroupPage;
//# sourceMappingURL=my-group.js.map