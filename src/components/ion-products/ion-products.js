"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// import { IonProductsService } from './ion-products.service';
/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonProductsComponent = (function () {
    function IonProductsComponent(navCtrl) {
        this.navCtrl = navCtrl;
    } //public IonProductsService: IonProductsService
    /*ngOnInit(): void {
      this.getGoodsListStyle();
    }
  
    getGoodsListStyle() {
      this.IonProductsService.getGoodsListStyle()
        .subscribe(
          result => {
            this.goodsListStyle = result?result.list.goodsListStyle:'';
            console.log(this.goodsListStyle);
          },
          error =>  this.errorMessage = <any>error);
    }*/
    /*getGoodsList() {
      this.IonProductsService.getGoodsList()
        .subscribe(
          result => {
            this.goodsList = result?result.list:'';
            console.log(this.goodsList);
          },
          error =>  this.errorMessage = <any>error);
    }*/
    IonProductsComponent.prototype.goDetails = function (item) {
        this.navCtrl.push('ProductViewPage', { item: item });
    };
    IonProductsComponent.prototype.goVideo = function (item) {
        this.navCtrl.push('VideoPage', { item: item });
    };
    __decorate([
        core_1.Input()
    ], IonProductsComponent.prototype, "products");
    __decorate([
        core_1.Input()
    ], IonProductsComponent.prototype, "catList");
    __decorate([
        core_1.Input()
    ], IonProductsComponent.prototype, "goodsListStyle");
    IonProductsComponent = __decorate([
        core_1.Component({
            selector: 'ion-products',
            templateUrl: 'ion-products.html'
        })
    ], IonProductsComponent);
    return IonProductsComponent;
}());
exports.IonProductsComponent = IonProductsComponent;
//# sourceMappingURL=ion-products.js.map