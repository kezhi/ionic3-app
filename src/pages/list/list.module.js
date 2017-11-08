"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by kezhi on 2017/10/16.
 */
var components_module_1 = require('./../../components/components.module');
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var list_1 = require('./list');
var ListPageModule = (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        core_1.NgModule({
            declarations: [
                list_1.ListPage
            ],
            imports: [
                ionic_angular_1.IonicPageModule.forChild(list_1.ListPage), components_module_1.ComponentsModule
            ],
            exports: [
                list_1.ListPage
            ]
        })
    ], ListPageModule);
    return ListPageModule;
}());
exports.ListPageModule = ListPageModule;
//# sourceMappingURL=list.module.js.map