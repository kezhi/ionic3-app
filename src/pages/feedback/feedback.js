"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var feedback_service_1 = require("./feedback.service");
var forms_1 = require('@angular/forms');
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, navParams, feedbackService, actionSheetCtrl, nativeService, storage, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.feedbackService = feedbackService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.nativeService = nativeService;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.drop = true;
        this.isChange = false; //头像是否改变标识
        this.avatarPath = './assets/img/logo@2x.png'; //用户默认头像
        this.feedbackList = [];
        if (this.navParams.get('product')) {
            this.product = this.navParams.get('product');
            this.feedType = 0;
        }
        else {
            this.feedType = 1;
        }
        this.feedForm = this.formBuilder.group({
            feedback: [''],
            feedbackText: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]]
        });
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FeedbackPage');
        this.storage.get('LoginInfo').then(function (loginInfo) {
            _this.user = loginInfo;
            _this.getFeedback(_this.user);
        });
    };
    FeedbackPage.prototype.getFeedback = function (user) {
        var _this = this;
        this.feedbackService.getFeedback(user).subscribe(function (result) {
            _this.feedbackList = result;
        });
    };
    FeedbackPage.prototype.selectItem = function (feedback) {
        this.feedback = feedback;
        this.drop = false;
    };
    FeedbackPage.prototype.select = function () {
        if (this.drop) {
            this.drop = false;
        }
        else {
            this.drop = true;
        }
    };
    FeedbackPage.prototype.addImg = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [
                {
                    text: '相机',
                    role: '相机',
                    handler: function () {
                        console.log('相机');
                        _this.getPicture(1);
                    }
                },
                {
                    text: '相册',
                    handler: function () {
                        console.log('相册');
                        _this.getPicture(0);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    FeedbackPage.prototype.getPicture = function (type) {
        var _this = this;
        var options = {
            targetWidth: 400,
            targetHeight: 400
        };
        console.log(type);
        if (type == 1) {
            this.nativeService.getPictureByCamera(options).subscribe(function (imageBase64) {
                _this.getPictureSuccess(imageBase64);
            });
        }
        else {
            this.nativeService.getPictureByPhotoLibrary(options).subscribe(function (imageBase64) {
                _this.getPictureSuccess(imageBase64);
            });
        }
    };
    FeedbackPage.prototype.getPictureSuccess = function (imageBase64) {
        alert('拍照OK');
        this.isChange = true;
        this.imageBase64 = imageBase64;
        this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
    };
    // 提交反馈
    FeedbackPage.prototype.postFeedback = function (content) {
        console.log(this.feedback, content, this.user);
        var param;
        if (this.feedType == 0) {
            param = {
                partnerId: '888',
                token: this.user.token,
                goodsId: this.product.goodsId,
                des: this.feedback,
                content: content,
                type: this.feedType
            };
        }
        else {
            param = {
                partnerId: '888',
                token: this.user.token,
                goodsId: '',
                des: '',
                content: content,
                type: this.feedType
            };
        }
        this.feedbackService.postFeedback(param).subscribe(function (result) {
            console.log(result);
        });
    };
    FeedbackPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-feedback',
            templateUrl: 'feedback.html',
            providers: [feedback_service_1.FeedbackService]
        })
    ], FeedbackPage);
    return FeedbackPage;
}());
exports.FeedbackPage = FeedbackPage;
//# sourceMappingURL=feedback.js.map