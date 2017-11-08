"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var search_service_1 = require('./search.service');
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, toastCtrl, storage, searchService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.searchService = searchService;
        this.hotWords = [];
        this.products = [];
        this.productsLen = null;
        this.localValue = [];
        console.log(this.keyword);
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.localValue = this.storage.get('keywords')?this.storage.get('keywords'):[];//localStorage.getItem('keywords')?localStorage.getItem('keywords').split(','):[];
        // console.log(this.localValue);
        //
        this.storage.get('keywords').then(function (keywords) {
            _this.localValue = keywords ? keywords.split(',') : [];
            console.log(_this.localValue);
            _this.clearText = _this.localValue && _this.localValue.length > 0 ? '清除历史记录' : '暂无搜索记录';
        });
        this.getHotWords();
    };
    SearchPage.prototype.getHotWords = function () {
        var _this = this;
        this.searchService.getHotWords().subscribe(function (result) {
            _this.hotWords = result;
        });
    };
    SearchPage.prototype.onSearch = function (keyword) {
        var _this = this;
        this.keyword = keyword;
        this.obj = {
            key: keyword
        };
        if (keyword) {
            this.searchService.getGoodsList(this.obj).subscribe(function (result) {
                _this.products = result;
                _this.productsLen = result.length;
                if (_this.productsLen == 0) {
                    var toast = _this.toastCtrl.create({
                        message: '亲,您搜索的商品不存在,试试其他的关键词吧!',
                        duration: 3000
                    });
                    toast.present();
                }
                console.log(_this.products, _this.productsLen);
            });
        }
        //存储关键词
        /*let val = this.storage.get('keywords');
        console.log(keyword);
        let localValue = val?val + ','+ keyword:keyword;
        console.log(localValue);*/
        this.storage.get('keywords').then(function (keywords) {
            console.log(keywords);
            var localValue = keywords ? keywords + ',' + keyword : keyword;
            _this.storage.set('keywords', localValue);
        });
    };
    SearchPage.prototype.clearHistory = function () {
        this.storage.remove('keywords');
        this.localValue = [];
    };
    SearchPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-search',
            templateUrl: 'search.html',
            providers: [search_service_1.SearchService]
        })
    ], SearchPage);
    return SearchPage;
}());
exports.SearchPage = SearchPage;
//# sourceMappingURL=search.js.map