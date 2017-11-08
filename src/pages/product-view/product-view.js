"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var product_view_service_1 = require('./product-view.service');
/**
 * Generated class for the ProductViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductViewPage = (function () {
    function ProductViewPage(navCtrl, navParams, modalCtrl, productViewService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.productViewService = productViewService;
        this.storage = storage;
        this.productImgs = [];
        this.productDetailImgs = [];
        this.productGuessList = [];
        this.goodsListStyle = '3-1-0-1';
        this.product = this.navParams.get('item');
    }
    ProductViewPage.prototype.ionViewDidLoad = function () {
        this.getGoodImgs();
        this.getGoodsGuess();
    };
    ProductViewPage.prototype.slideChanged = function () {
        // let currentIndex = this.slides.getActiveIndex();
        // console.log('Current index is', currentIndex);
    };
    ProductViewPage.prototype.getGoodImgs = function () {
        var _this = this;
        this.productViewService.getGoodImgs()
            .subscribe(function (result) {
            _this.proImgLen = result.length;
            _this.productImgs = result;
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductViewPage.prototype.getGoodDetail = function () {
        var _this = this;
        this.productViewService.getGoodDetail()
            .subscribe(function (result) {
            _this.productDetailImgs = result;
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductViewPage.prototype.getGoodsGuess = function () {
        var _this = this;
        this.productViewService.getGoodsGuess()
            .subscribe(function (result) {
            _this.productGuessList = result;
            console.log(_this.productGuessList);
        }, function (error) { return _this.errorMessage = error; });
    };
    ProductViewPage.prototype.lookDetail = function () {
        this.getGoodDetail();
    };
    ProductViewPage.prototype.shareProduct = function () {
        this.navCtrl.push('ShareProductPage');
    };
    ProductViewPage.prototype.feedback = function (product) {
        var _this = this;
        this.storage.get('LoginInfo').then(function (loginInfo) {
            console.log(loginInfo.user.mobile);
            if (loginInfo.token) {
                _this.navCtrl.push('FeedbackPage', { product: product });
            }
            else {
                var loginModal = _this.modalCtrl.create('LoginPage', { page: 'ProductViewPage' });
                loginModal.present();
            }
        });
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Slides)
    ], ProductViewPage.prototype, "slides");
    ProductViewPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-product-view',
            templateUrl: 'product-view.html',
            providers: [product_view_service_1.ProductViewService]
        })
    ], ProductViewPage);
    return ProductViewPage;
}());
exports.ProductViewPage = ProductViewPage;
//# sourceMappingURL=product-view.js.map