"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var list_service_1 = require('./list.service');
var ListPage = (function () {
    function ListPage(navCtrl, navParams, listService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listService = listService;
        this.products = [];
        this.goodsListStyle = '3-1-0-1';
        this.type = 'all';
        this.sortObj = {
            catId: '',
            ifSuperDiscount: '',
            st: 1,
            sortType: '',
            params: ''
        };
        function isEmptyObject(e) {
            var t;
            for (t in e)
                return !1;
            return !0;
        }
        if (this.navParams.get('mainNav')) {
            this.param = this.navParams.get('mainNav');
            this.goodsListStyle = this.param.listViewType;
            if (isEmptyObject(this.param.params)) {
                this.sortObj.params = '';
            }
            else {
                this.sortObj.params = this.param.params;
            }
        }
        else if (this.navParams.get('category')) {
            this.param = this.navParams.get('category');
            this.param.title = this.navParams.get('category').name;
            this.goodsListStyle = '3-1-0-1';
            this.sortObj.catId = this.param.id;
        }
        else {
            this.param = { title: '超级划算' };
            this.sortObj.ifSuperDiscount = 1;
        }
        console.log(this.param);
    }
    ListPage.prototype.ngOnInit = function () {
        this.getGoodsList(this.sortObj);
    };
    ListPage.prototype.getGoodsList = function (sortObj) {
        var _this = this;
        this.listService.getGoodsList(sortObj).subscribe(function (result) {
            if (sortObj.st == 1) {
                _this.products = result;
            }
            else {
                _this.products = _this.products.concat(result);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    ListPage.prototype.sortType = function (type) {
        this.sortObj.st = 1;
        if (type == 'afterCoupon') {
            if (this.sortObj.sortType == 4) {
                this.sortObj.sortType = 3;
            }
            else {
                this.sortObj.sortType = 4;
            }
        }
        else if (type == 'coupon') {
            console.log('coupon');
            if (this.sortObj.sortType == 6) {
                this.sortObj.sortType = 5;
            }
            else {
                this.sortObj.sortType = 6;
            }
        }
        else if (type == 'sales') {
            this.sortObj.sortType = 8;
        }
        else {
            this.sortObj.sortType = '';
        }
        console.log(this.sortObj);
        this.getGoodsList(this.sortObj);
    };
    ListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        this.sortObj.st = this.sortObj.st + 1;
        console.log(this.sortObj.st);
        setTimeout(function () {
            _this.getGoodsList(_this.sortObj);
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    ListPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-about',
            templateUrl: 'list.html',
            providers: [list_service_1.ListService]
        })
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=list.js.map