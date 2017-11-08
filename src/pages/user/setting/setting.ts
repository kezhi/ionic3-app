import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {Storage} from "@ionic/storage";
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  userInfo: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              public actionSheetCtrl: ActionSheetController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');

    this.storage.get('LoginInfo').then(loginInfo => {
      if (loginInfo&&loginInfo.token) {
        this.userInfo =  loginInfo.user;
        console.log(this.userInfo);
      }
    });
  }


  settingAvatar(){
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '相机',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: '相册',
          role: '',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
