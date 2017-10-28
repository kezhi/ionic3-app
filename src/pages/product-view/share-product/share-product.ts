import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
// import {Clipboard} from "@ionic-native/clipboard";
import {Http} from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-share-product',
  templateUrl: 'share-product.html',
})
export class ShareProductPage {

  previewContentUrl: string = "http://laike.jfapps.com/app/user/sharePreview.api?token=ffce1784-86ed-42cc-b539-823d75071267";
  previewContent: string = "";

  imgUrl: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App,public http:Http) {
    /*this.imgUrl = this.navParams.data[0];//this.navParams.data;
    console.log(this.imgUrl);
    this.http.get(this.previewContentUrl)
      .map(res=>res.json())
      .subscribe(res=>{
        this.previewContent = res.content;
      });*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareProductPage');
  }


  //--------------------------------------------------------
  //  分享到微信
  //--------------------------------------------------------

 /* //分享到微信朋友圈
  shareWxPengyouquan() {
    let wechat = (<any>window).Wechat;
    wechat.isInstalled(function (installed) {
      if (!installed) {
        this.toastService.show('您没有安装微信！');
        return;
      }
    }, function (reason) {
      // this.toastService.show("Failed: " + reason);
    });

    //分享图片
    wechat.share({
      message: {
        title: "Hi, there",
        description: "This is description.",
        thumb: "http://img5.imgtn.bdimg.com/it/u=4287850242,3208290927&fm=200&gp=0.jpg",
        mediaTagName: "TEST-TAG-001",
        messageExt: "这是第三方带的测试字段",
        messageAction: "<action>dotalist</action>",
        media: {
          type:wechat.Type.IMAGE,
          image:this.imgUrl
        }
      },
      scene: wechat.Scene.TIMELINE
    }, function () {
      // alert("Success");
    }, function (reason) {
      // alert("Failed: " + reason);
    });



  //分享到微信好友
  shareWxFriend(){
    let wechat = (<any>window).Wechat;
    wechat.isInstalled(function (installed) {
      if (!installed) {
        this.toastService.show('您没有安装微信！');
        return;
      }
    }, function (reason) {
      this.toastService.show("Failed: " + reason);
    });


    //分享图片
    wechat.share({
      message: {
        title: "you are right",
        description: "This is description.",
        thumb: this.imgUrl,
        mediaTagName: "TEST-TAG-001",
        messageExt: "这是第三方带的测试字段",
        messageAction: "<action>dotalist</action>",
        media: {
          type:wechat.Type.IMAGE,
          image:this.imgUrl
        }
      },
      scene: wechat.Scene.SESSION
    }, function () {
      // alert("Success");
    }, function (reason) {
      // alert("Failed: " + reason);
    });
  }

//-------------------------------------------------------------------
//  分享到微博
//-------------------------------------------------------------------

  //分享到微博
  shareWeibo(){
    let weiboSDK = (<any>window).WeiboSDK;

    weiboSDK.checkClientInstalled(function () {
      alert('client is installed');
    }, function () {
      alert('client is not installed');
    });

    weiboSDK.ssoLogin(function (args) {
      alert('access token is ' + args.access_token);
      alert('userId is ' + args.userId);
      alert('expires_time is ' + new Date(parseInt(args.expires_time)) + ' TimeStamp is ' + args.expires_time);
    }, function (failReason) {
      alert(failReason);
    });


    var args = {
      image:"https://cordova.apache.org/static/img/pluggy.png"
    };
    weiboSDK.shareImageToWeibo(function () {
      // alert('share success');
    }, function (failReason) {
      // alert(failReason);
    }, args);
  }

  //-----------------------------------------------------
  //  分享到QQ好友
  //-----------------------------------------------------
  shareQQFriend(){
    let qqsdk = (<any>window).QQSDK;

    /!*检查是否安装QQ*!/
    qqsdk.checkClientInstalled(function (installed) {
      if (!installed) {
        alert('您没有安装QQ！');
        return;
      }
    }, function (reason) {
      alert("Failed: " + reason);
    });

    /!*授权登录*!/
    var args1 = {};
    qqsdk.ssoLogin(function (result) {
      alert('token is ' + result.access_token);
      alert('userid is ' + result.userid);
      alert('expires_time is ' + new Date(parseInt(result.expires_time)) + ' TimeStamp is ' + result.expires_time);
    }, function (failReason) {
      alert(failReason);
    }, args1);

    /!**分享图片到QQ好友*!/
    var args = {
      client:qqsdk.ClientType.QQ,
      scene:qqsdk.Scene.QQ,
      title:'',
      description:'这是图片描述',
      image:this.imgUrl
    };
    qqsdk.shareImage(function () {
      // alert('分享成功');
    }, function (failReason) {
      // alert("没有安装qq");
    }, args);
  }




  // -----------------------------------------------------
  //  分享到QQ空间
  //------------------------------------------------------

  shareQQzone(){
    let qqsdk = (<any>window).QQSDK;

    /!*检查是否安装QQ*!/
    qqsdk.checkClientInstalled(function (installed) {
      if (!installed) {
        alert('您没有安装QQ！');
        return;
      }
    }, function (reason) {
      alert("Failed: " + reason);
    });

    /!*授权登录*!/
    var args1 = {};
    qqsdk.ssoLogin(function (result) {
      alert('token is ' + result.access_token);
      alert('userid is ' + result.userid);
      alert('expires_time is ' + new Date(parseInt(result.expires_time)) + ' TimeStamp is ' + result.expires_time);
    }, function (failReason) {
      alert(failReason);
    }, args1);


    /!**分享图片到QQ空间*!/
    var args = {
      client:qqsdk.ClientType.QQZone,
      scene:qqsdk.Scene.QQZone,
      title:'',
      description:'',
      image:this.imgUrl
    };
    qqsdk.shareImage(function () {
      // alert('分享成功');
    }, function (failReason) {
      // alert("没有安装qq");
    }, args);
  }



  // -----------------------------------------------------
  //  复制与编辑
  //------------------------------------------------------

  copyHandlerClick(){
    this.clipboard.copy(document.getElementById("imgContent").innerText);
    alert("复制成功");
  }

  editHandlerClick(){
    this.app.getRootNav().push('EditPage',this.previewContent);
  }*/
}
