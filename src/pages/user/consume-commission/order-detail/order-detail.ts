import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderDetailService } from './order-detail.service';
import {Storage} from "@ionic/storage";
/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
  providers: [OrderDetailService]
})
export class OrderDetailPage {
  orderList: any = [];
  level: string = '1';
  token: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private orderDetailService: OrderDetailService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
    this.storage.get('LoginInfo').then(loginInfo => {
      this.token = loginInfo.token;
      this.getOrder(this.token, this.level);
    });
  }

  getOrder(token,level){
    this.orderDetailService.getOrder(token,level).subscribe(res => {
      this.orderList = res;
    })
  }

  select(level){
    this.getOrder(this.token,level);
  }

}
