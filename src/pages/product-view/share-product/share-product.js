"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ShareProductPage = (function () {
    function ShareProductPage(navCtrl, navParams, app, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.previewContentUrl = "http://laike.jfapps.com/app/user/sharePreview.api?token=ffce1784-86ed-42cc-b539-823d75071267";
        this.previewContent = "";
        this.imgUrl = "";
        /*this.imgUrl = this.navParams.data[0];//this.navParams.data;
        console.log(this.imgUrl);
        this.http.get(this.previewContentUrl)
          .map(res=>res.json())
          .subscribe(res=>{
            this.previewContent = res.content;
          });*/
    }
    ShareProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShareProductPage');
    };
    ShareProductPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-share-product',
            templateUrl: 'share-product.html'
        })
    ], ShareProductPage);
    return ShareProductPage;
}());
exports.ShareProductPage = ShareProductPage;
//# sourceMappingURL=share-product.js.map