"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ionic_angular_1 = require('ionic-angular');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var storage_1 = require("@ionic/storage");
var user_1 = require('../pages/user/user');
var category_1 = require('../pages/category/category');
var category_service_1 = require('../pages/category/category.service');
var home_1 = require('../pages/home/home');
var home_service_1 = require('../pages/home/home.service');
var tabs_1 = require('../pages/tabs/tabs');
var status_bar_1 = require('@ionic-native/status-bar');
var splash_screen_1 = require('@ionic-native/splash-screen');
var components_module_1 = require('../components/components.module');
// import {SuperTabsModule} from "ionic2-super-tabs";
var camera_1 = require('@ionic-native/camera');
var native_service_1 = require('../providers/native-service');
var global_data_1 = require('../providers/global-data');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                user_1.UserPage,
                category_1.CategoryPage,
                home_1.HomePage,
                tabs_1.TabsPage,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                components_module_1.ComponentsModule,
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp, {
                    tabsHideOnSubPages: 'true',
                    backButtonText: ''
                }),
                storage_1.IonicStorageModule.forRoot(),
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                user_1.UserPage,
                category_1.CategoryPage,
                home_1.HomePage,
                tabs_1.TabsPage,
            ],
            providers: [
                status_bar_1.StatusBar,
                splash_screen_1.SplashScreen,
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
                category_service_1.CategoryService,
                home_service_1.HomeService,
                native_service_1.NativeService,
                global_data_1.GlobalData,
                camera_1.Camera
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map