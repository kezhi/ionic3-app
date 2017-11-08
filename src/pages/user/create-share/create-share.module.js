"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var create_share_1 = require('./create-share');
var components_module_1 = require('../../../components/components.module');
var CreateSharePageModule = (function () {
    function CreateSharePageModule() {
    }
    CreateSharePageModule = __decorate([
        core_1.NgModule({
            declarations: [
                create_share_1.CreateSharePage,
            ],
            imports: [
                ionic_angular_1.IonicPageModule.forChild(create_share_1.CreateSharePage), components_module_1.ComponentsModule
            ]
        })
    ], CreateSharePageModule);
    return CreateSharePageModule;
}());
exports.CreateSharePageModule = CreateSharePageModule;
//# sourceMappingURL=create-share.module.js.map