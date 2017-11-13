import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {ConsumeCommissionService} from './consume-commission.service';
import {Storage} from "@ionic/storage";
import { TabsPage } from '../../tabs/tabs';
/**
 * Generated class for the ConsumeCommissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consume-commission',
  templateUrl: 'consume-commission.html',
  providers: [ConsumeCommissionService]
})
export class ConsumeCommissionPage {
  value: string = '0';
  token: string;
  consumeCommission: any;
  constructor(public navCtrl: NavController,
              private storage: Storage,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public consumeCommissionService: ConsumeCommissionService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsumeCommissionPage');

    this.storage.get('LoginInfo').then(loginInfo => {
        this.token = loginInfo.token;
        // 获取佣金,代理,团队等数据
      console.log(this.token);
        this.getWalletNewDetail(this.token);
    });
  }

  getWalletNewDetail(token){
    this.consumeCommissionService.getWalletNewDetail(token).subscribe(res => {
      this.consumeCommission = res;
    })
  }


  // 选择tab
  pushOrderDetail(){
    this.navCtrl.push('OrderDetailPage')
  }

  pushGetMoney(money){
    if(money>0){
      // 去提现
      this.consumeCommissionService.getConsumeCheck(this.token).subscribe(res => {
        let result = res;
        if(result.ifWd == 0){
          let toast = this.toastCtrl.create({
            message: result.msg,
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        }else{
          // this.navCtrl.push();
        }
      })
    }else{
      // 去赚钱
      this.navCtrl.setRoot(TabsPage);
    }
  }
}
