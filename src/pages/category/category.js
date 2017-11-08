"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var category_service_1 = require('./category.service');
// import { ListPage } from '../list/list';
var CategoryPage = (function () {
    function CategoryPage(navCtrl, categoryService) {
        this.navCtrl = navCtrl;
        this.categoryService = categoryService;
        this.categoryList = [];
    }
    CategoryPage.prototype.ngOnInit = function () {
        this.getCategory();
    };
    CategoryPage.prototype.getCategory = function () {
        var _this = this;
        var categoryInfo = [
            {
                id: 1,
                img: "icon-cloth.png",
                name: "女装",
                des: "爱自己多一点"
            },
            {
                id: 9,
                img: "icon-men.png",
                name: "男装",
                des: "找品味"
            },
            {
                id: 10,
                img: "icon-bra.png",
                name: "内衣",
                des: "凹凸有致"
            },
            {
                id: 3,
                img: "icon-mask.png",
                name: "美妆",
                des: "靠脸吃饭"
            },
            {
                id: 6,
                img: "icon-food.png",
                name: "美食",
                des: "最强吃货"
            },
            {
                id: 2,
                img: "icon-cart.png",
                name: "母婴",
                des: "给你最好的"
            },
            {
                id: 4,
                img: "icon-sofa.png",
                name: "家居",
                des: "有爱才有家"
            },
            {
                id: 8,
                img: "icon-machine.png",
                name: "数码家电",
                des: "高科技黑科技"
            },
            {
                id: 5,
                img: "icon-shoes.png",
                name: "鞋帽包",
                des: "鞋包收藏癖"
            },
            {
                id: 7,
                img: "icon-other.png",
                name: "其他",
                des: "更多惊喜"
            }
        ];
        this.categoryService.getCategory()
            .subscribe(function (result) {
            var categoryArr = result;
            categoryArr.forEach(function (index) {
                categoryInfo.forEach(function (item) {
                    if (index.id == item.id) {
                        index.img = item.img;
                        index.des = item.des;
                    }
                });
            });
            _this.categoryList = categoryArr;
            console.log(_this.categoryList);
        }, function (error) { return _this.errorMessage = error; });
    };
    CategoryPage.prototype.pushList = function (category) {
        this.navCtrl.push('ListPage', { category: category });
    };
    CategoryPage = __decorate([
        core_1.Component({
            selector: 'page-cagegory',
            templateUrl: 'category.html',
            providers: [category_service_1.CategoryService]
        })
    ], CategoryPage);
    return CategoryPage;
}());
exports.CategoryPage = CategoryPage;
//# sourceMappingURL=category.js.map