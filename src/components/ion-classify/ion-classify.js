"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/**
 * Generated class for the IonClassifyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonClassifyComponent = (function () {
    function IonClassifyComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    IonClassifyComponent.prototype.pushList = function (mainNav) {
        /*if(mainNav.listViewType == 3){
          this.navCtrl.push('VideoListPage',{mainNav:mainNav});
        }else{*/
        this.navCtrl.push('ListPage', { mainNav: mainNav });
        // }
    };
    __decorate([
        core_1.Input()
    ], IonClassifyComponent.prototype, "classifyArr");
    __decorate([
        core_1.Input()
    ], IonClassifyComponent.prototype, "classifyStyle");
    IonClassifyComponent = __decorate([
        core_1.Component({
            selector: 'ion-classify',
            templateUrl: 'ion-classify.html'
        })
    ], IonClassifyComponent);
    return IonClassifyComponent;
}());
exports.IonClassifyComponent = IonClassifyComponent;
//# sourceMappingURL=ion-classify.js.map