import { Component } from '@angular/core';
import { NavController,ModalController,ActionSheetController } from 'ionic-angular';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  userInfo: {
    mobile: string,
    name: string
  };
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,private storage: Storage,public actionSheetCtrl:ActionSheetController) {

  }


  ionViewWillEnter() {
    this.ifLogin();
  }
  ifLogin(){
    this.storage.get('LoginInfo').then(loginInfo => {
      console.log(loginInfo);
      if (loginInfo&&loginInfo.token) {
        let userInfo = loginInfo.user;
        this.userInfo = {mobile:userInfo.mobile, name:userInfo.name};
      }else{
        const loginModal = this.modalCtrl.create('LoginPage');
        loginModal.present();
      }
    });
  }
  pushShare(){
    this.navCtrl.push('CreateSharePage');
  }
  pushAbout(){
    this.navCtrl.push('AboutPage');
  }


}
