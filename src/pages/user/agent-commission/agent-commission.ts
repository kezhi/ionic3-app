import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgentCommissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-commission',
  templateUrl: 'agent-commission.html',
})
export class AgentCommissionPage {
  balance: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.balance = this.navParams.get('balance');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentCommissionPage',this.balance);
  }

  pushMyBill(){
    this.navCtrl.push('MyBillPage');
  }

}
