"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
/**
 * Generated class for the IonShareComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonShareComponent = (function () {
    function IonShareComponent(actionSheetCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        console.log('Hello IonShareComponent Component');
        this.text = 'Hello World';
    }
    IonShareComponent.prototype.moreShare = function () {
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'QQ空间',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: '朋友圈',
                    role: '',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: '新浪微博',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    IonShareComponent = __decorate([
        core_1.Component({
            selector: 'ion-share',
            templateUrl: 'ion-share.html'
        })
    ], IonShareComponent);
    return IonShareComponent;
}());
exports.IonShareComponent = IonShareComponent;
//# sourceMappingURL=ion-share.js.map