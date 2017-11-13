import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { MyGroupService } from './my-group.service';

/**
 * Generated class for the MyGroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-group',
  templateUrl: 'my-group.html',
  providers: [MyGroupService]
})
export class MyGroupPage {
  level: string = '1';
  token: string;
  myGroupList: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private myGroupService: MyGroupService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyGroupPage');

    this.storage.get('LoginInfo').then(loginInfo => {
        this.token = loginInfo.token;
        this.getMyGroup(this.token, this.level);
    });
  }

  getMyGroup(token,level){
    this.myGroupService.getMyGroup(token,level).subscribe(res => {
      this.myGroupList = res;
    })
  }
  select(level){
    this.getMyGroup(this.token, level);
  }
}
