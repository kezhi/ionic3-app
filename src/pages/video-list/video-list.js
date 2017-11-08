"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var video_list_service_1 = require('./video-list.service');
/**
 * Generated class for the VideoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VideoListPage = (function () {
    function VideoListPage(navCtrl, navParams, VideoListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.VideoListService = VideoListService;
        this.videoList = [];
    }
    VideoListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VideoListPage');
        var params = this.navParams.get('mainNav');
        this.getVideoList(params);
        // console.log(this.data)
    };
    VideoListPage.prototype.getVideoList = function (params) {
        var _this = this;
        this.VideoListService.getVideoList(params).subscribe(function (result) {
            console.log(result);
            _this.videoList = result;
        }, function (error) { return _this.errorMessage = error; });
    };
    VideoListPage.prototype.goVideo = function (video) {
        this.navCtrl.push('VideoPage', { video: video });
    };
    VideoListPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-video-list',
            templateUrl: 'video-list.html',
            providers: [video_list_service_1.VideoListService]
        })
    ], VideoListPage);
    return VideoListPage;
}());
exports.VideoListPage = VideoListPage;
//# sourceMappingURL=video-list.js.map