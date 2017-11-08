"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var taoqianggou_service_1 = require('./taoqianggou.service');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
/**
 * Generated class for the TaoqianggouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaoqianggouPage = (function () {
    function TaoqianggouPage(http, navCtrl, navParams, taoqianggouService) {
        this.http = http;
        this.navParams = navParams;
        this.taoqianggouService = taoqianggouService;
        this.liveIndex = [];
        this.products = [];
        // console.log(this.taoqianggouService.getLiveIndex())
    }
    TaoqianggouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaoqianggouPage');
        this.getLiveIndex();
        this.getOneLiveGoods();
    };
    /*getLiveGoods(live){
      this.taoqianggouService.getLiveGoods(live).subscribe(
        result => {
          this.liveGoods = result.list;
        }
      )
    }*/
    TaoqianggouPage.prototype.getLiveIndex = function () {
        var _this = this;
        this.taoqianggouService.getLiveIndex().subscribe(function (result) {
            var resultList = result;
            resultList.forEach(function (index) {
                if (index.ifLiving == 0) {
                    index.ifLivingName = '已开抢';
                }
                else if (index.ifLiving == 1) {
                    index.ifLivingName = '正在抢购';
                    this.liveId = index.id;
                }
                else {
                    index.ifLivingName = '即将开抢';
                }
            }, _this);
            _this.liveIndex = resultList;
            console.log(result);
        });
    };
    TaoqianggouPage.prototype.getOneLiveGoods = function () {
        var _this = this;
        this.http.get('app/liveIndex.api?partnerId=888')
            .map(function (res) { return res.json(); })
            .mergeMap(function (rel) {
            console.log(rel.list.length);
            var lives = rel.list;
            for (var i = 0; i < lives.length; i++) {
                console.log(lives[i]);
                if (lives[i].ifLiving == 1) {
                    return _this.http.get('app/goods/getLiveGoods.api?partnerId=888&dayType=' + lives[i].dayType + '&liveTimeId=' + lives[i].id)
                        .map(function (res) { return res.json(); });
                }
            }
        })
            .subscribe(function (data) {
            _this.products = data.list;
            console.log(_this.products);
        });
    };
    TaoqianggouPage.prototype.select = function (live) {
        var _this = this;
        console.log(live);
        this.liveId = live.id;
        this.taoqianggouService.getLiveGoods(live).subscribe(function (result) {
            _this.products = result;
        });
    };
    TaoqianggouPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-taoqianggou',
            templateUrl: 'taoqianggou.html',
            providers: [taoqianggou_service_1.TaoqianggouService]
        })
    ], TaoqianggouPage);
    return TaoqianggouPage;
}());
exports.TaoqianggouPage = TaoqianggouPage;
//# sourceMappingURL=taoqianggou.js.map