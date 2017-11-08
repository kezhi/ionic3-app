import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,AlertController,LoadingController } from 'ionic-angular';
import { LOGO,APP_NAME,APP_VERSION } from '../../../providers/constants';
import {Storage} from "@ionic/storage";
import { TabsPage } from '../../tabs/tabs';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  logo: string = LOGO;
  appVersion: string = APP_VERSION;
  appName: string = APP_NAME;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  feedback(){
    this.storage.get('LoginInfo').then(loginInfo => {
      console.log(loginInfo.user.mobile);
      if (loginInfo.token) {
        this.navCtrl.push('FeedbackPage');
      }else{
        const loginModal = this.modalCtrl.create('LoginPage');
        loginModal.present();
      }
    });
  }
  exit(){
    let confirm = this.alertCtrl.create({
      title: '提示',
      message: '确定要退出账户吗?',
      buttons: [
        {
          text: '确定',
          handler: () => {
            this.storage.clear();
            const loginModal = this.modalCtrl.create('LoginPage',{page:'HomePage'});
            loginModal.present();
            this.navCtrl.setRoot(TabsPage);
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('取消')
          }
        }
      ]
    });
    confirm.present();
  }
  clearCache(){
    let loader = this.loadingCtrl.create({
      content: "正在清除...",
      duration: 1000
    });
    loader.present();
  }
}
