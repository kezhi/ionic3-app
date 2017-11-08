"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ranking_list_service_1 = require('./ranking-list.service');
/**
 * Generated class for the RankingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RankingListPage = (function () {
    function RankingListPage(navCtrl, navParams, rankingListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rankingListService = rankingListService;
        this.type = '1';
        this.rankList0 = [];
        this.rankList1 = [];
    }
    RankingListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RankingListPage');
        this.getRanking(this.type);
    };
    RankingListPage.prototype.getRanking = function (type) {
        var _this = this;
        this.rankingListService.getRanking(type).subscribe(function (res) {
            var result = res;
            var result1 = [];
            result.forEach(function (item, i) {
                item.index = i + 1;
                if (i > 0) {
                    result1.push(item);
                }
            }, _this);
            _this.rankList0 = result[0];
            _this.rankList1 = result1;
            console.log(_this.rankList1);
        });
    };
    // 选择tab
    RankingListPage.prototype.select = function (type) {
        this.getRanking(type);
    };
    RankingListPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-ranking-list',
            templateUrl: 'ranking-list.html',
            providers: [ranking_list_service_1.RankingListService]
        })
    ], RankingListPage);
    return RankingListPage;
}());
exports.RankingListPage = RankingListPage;
//# sourceMappingURL=ranking-list.js.map