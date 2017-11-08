"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var service_center_service_1 = require('./service-center.service');
/**
 * Generated class for the ServiceCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceCenterPage = (function () {
    function ServiceCenterPage(navCtrl, navParams, serviceCenterService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceCenterService = serviceCenterService;
    }
    ServiceCenterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceCenterPage');
        this.getServiceInfo();
    };
    ServiceCenterPage.prototype.getServiceInfo = function () {
        var _this = this;
        this.serviceCenterService.getServiceInfo().subscribe(function (res) {
            console.log(res);
            _this.serviceInfo = res;
        });
    };
    ServiceCenterPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-service-center',
            templateUrl: 'service-center.html',
            providers: [service_center_service_1.ServiceCenterService]
        })
    ], ServiceCenterPage);
    return ServiceCenterPage;
}());
exports.ServiceCenterPage = ServiceCenterPage;
//# sourceMappingURL=service-center.js.map