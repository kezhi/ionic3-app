import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyBillService } from './my-bill.service';
import {Storage} from "@ionic/storage";
/**
 * Generated class for the MyBillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-bill',
  templateUrl: 'my-bill.html',
  providers: [MyBillService]
})
export class MyBillPage {
  myBillList: any = [];
  token: string;
  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, private myBillService: MyBillService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBillPage');
    this.storage.get('LoginInfo').then(loginInfo => {
      console.log(loginInfo);
      if (loginInfo && loginInfo.token) {
        this.token = loginInfo.token;
        this.myBillService.getBalance(this.token).subscribe(res=>{
          this.myBillList = res;
        })
      }
    });
  }

}
