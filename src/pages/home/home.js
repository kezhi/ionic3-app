"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var home_service_1 = require('./home.service');
var HomePage = (function () {
    function HomePage(navCtrl, HomeService) {
        this.navCtrl = navCtrl;
        this.HomeService = HomeService;
        this.products = []; //列表数据
        this.catList = []; //列表数据
        this.mainNavs = []; //分类导航数据
        this.bannerList = []; //轮播图数据
        this.classifyArr = []; //分类数据
        this.menuList = []; //分类数据
        this.sortObj = {
            st: 1
        };
        this.catObj = {
            st: 1,
            id: 1
        };
        this.menuOn = 0;
        this.menu_segment = 'menu_0';
        this._refresher = null;
        this.oldCatList = [];
    }
    HomePage.prototype.slideChanged = function () {
        // let currentIndex = this.slides.getActiveIndex();
        // console.log('Current index is', currentIndex);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.getGoodsList(this.sortObj);
        this.getGoodsListStyle();
        // this.getCatList(this.catObj);
    };
    HomePage.prototype.select = function (menu) {
        // this.slider.slideTo(menu.index, 300);
        this.menuOn = menu.index;
        if (menu == 0) {
            this.menu_segment = 'menu_0';
            this.menuOn = 0;
        }
        else {
            this.menu_segment = 'menu_1';
            this.catObj = {
                st: 1,
                id: menu.id
            };
            this.getCatList(this.catObj);
        }
        this.content.scrollToTop(0);
    };
    /*onSlideChanged(){
      let currentIndex = this.slider.getActiveIndex();
      console.log(currentIndex)
      if(!currentIndex==0){
        this.catObj = {
          st:1,
          id: 1
        };
        this.getCatList(this.catObj);
      }
    }
    panEvent(e) {
      let currentIndex = this.slider.getActiveIndex();
      /!*if (currentIndex === 0){
        this.menu_segment = 'menu_0';
      }
      if (currentIndex === 1){
        this.menu_segment = 'menu_1';
      }*!/
      // console.log(currentIndex)
    }*/
    HomePage.prototype.getGoodsListStyle = function () {
        var _this = this;
        this.HomeService.getGoodsListStyle()
            .subscribe(function (result) {
            var resultList = result;
            _this.goodsListStyle = resultList.goodsListStyle;
            if (resultList.list[0].styleType == '2-10-0') {
                _this.mainNavs = resultList.list[0].cateInfoList;
            }
            else {
                _this.mainNavs = resultList.list[0].cateInfoList.slice(0, 5);
            }
            _this.classifyArr = resultList.list[1].cateInfoList;
            _this.classifyStyle = resultList.list[1].styleType;
        }, function (error) { return _this.errorMessage = error; });
    };
    ;
    HomePage.prototype.getGoodsList = function (sortObj) {
        var _this = this;
        this.HomeService.getGoodsList(sortObj)
            .subscribe(function (result) {
            var resultList = result;
            if (sortObj.st == 1) {
                _this.products = resultList.list;
                _this.bannerListLen = resultList.bannerList.length;
                _this.bannerList = resultList.bannerList;
                for (var i = 0; i < resultList.catList.length; i++) {
                    resultList.catList[i].index = i + 1;
                }
                _this.menuList = resultList.catList;
                console.log(_this.menuList);
            }
            else {
                _this.products = _this.products.concat(resultList.list);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.getCatList = function (catObj) {
        var _this = this;
        this.HomeService.getCatList(catObj).subscribe(function (result) {
            console.log(result);
            var resultList = result;
            if (catObj.st == 1) {
                _this.catList = resultList;
            }
            else {
                _this.catList = _this.catList.concat(resultList);
            }
            if (_this._refresher) {
                _this._refresher.complete();
            }
            if (_this.oldCatList.length > 0) {
                _this.catList.splice(0, _this.oldCatList.length);
                _this.oldCatList = [];
            }
        });
    };
    HomePage.prototype.pushList = function (mainNav) {
        if (mainNav.listViewType == 4) {
            this.navCtrl.push('TaoqianggouPage', { mainNav: mainNav });
        }
        else {
            this.navCtrl.push('ListPage', { mainNav: mainNav });
        }
    };
    HomePage.prototype.pushSearch = function () {
        this.navCtrl.push('SearchPage');
    };
    HomePage.prototype.pushAdv = function (item) {
        console.log(item);
        if (item.toDo == 1) {
            this.navCtrl.push('ProductViewPage', { item: item.goods });
        }
        else {
        }
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.sortObj.st = this.sortObj.st + 1;
        setTimeout(function () {
            _this.getGoodsList(_this.sortObj);
            infiniteScroll.complete();
        }, 500);
    };
    HomePage.prototype.doInfiniteList = function (infiniteScroll) {
        var _this = this;
        this.catObj.st = this.catObj.st + 1;
        setTimeout(function () {
            _this.getCatList(_this.catObj);
            infiniteScroll.complete();
        }, 500);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.oldCatList = this.catList;
        this.getCatList(this.catObj);
        this._refresher = refresher;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Slides)
    ], HomePage.prototype, "slides");
    __decorate([
        core_1.ViewChild(ionic_angular_1.Content)
    ], HomePage.prototype, "content");
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html',
            providers: [home_service_1.HomeService]
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map