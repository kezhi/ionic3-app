"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ionic_angular_1 = require('ionic-angular');
var core_1 = require('@angular/core');
var ion_products_1 = require('./ion-products/ion-products');
var ion_classify_1 = require('./ion-classify/ion-classify');
var ion_slide_content_1 = require('./ion-slide-content/ion-slide-content');
var ion_share_1 = require('./ion-share/ion-share');
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [ion_products_1.IonProductsComponent, ion_classify_1.IonClassifyComponent,
                ion_slide_content_1.IonSlideContentComponent,
                ion_share_1.IonShareComponent],
            imports: [ionic_angular_1.IonicModule],
            exports: [ion_products_1.IonProductsComponent, ion_classify_1.IonClassifyComponent,
                ion_slide_content_1.IonSlideContentComponent,
                ion_share_1.IonShareComponent]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map