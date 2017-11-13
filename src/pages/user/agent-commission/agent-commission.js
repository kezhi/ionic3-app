"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
/**
 * Generated class for the AgentCommissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgentCommissionPage = (function () {
    function AgentCommissionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.balance = this.navParams.get('balance');
    }
    AgentCommissionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgentCommissionPage', this.balance);
    };
    AgentCommissionPage.prototype.pushMyBill = function () {
        this.navCtrl.push('MyBillPage');
    };
    AgentCommissionPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-agent-commission',
            templateUrl: 'agent-commission.html'
        })
    ], AgentCommissionPage);
    return AgentCommissionPage;
}());
exports.AgentCommissionPage = AgentCommissionPage;
//# sourceMappingURL=agent-commission.js.map