import { Component } from '@angular/core';
import { NavController,ModalController,ActionSheetController,Events } from 'ionic-angular';
import {Storage} from "@ionic/storage";
import { GlobalData } from "../../providers/global-data";
import { UserService } from "./user.service";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
  providers: [UserService]
})
export class UserPage {
  userInfo: {
    mobile: string,
    name: string
  };
  token: string;
  myInfo: any;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private storage: Storage,
              public actionSheetCtrl:ActionSheetController,
              private events: Events,
              private globalData: GlobalData,
              private userService: UserService
  ) {

  }


  ionViewWillEnter() {
    this.ifLogin();

    this.events.subscribe('user:login', (loginInfo: any) => {
      let userInfo = loginInfo.user;
      this.globalData.userId = userInfo.id;
      this.globalData.username = userInfo.name;
      this.globalData.role = userInfo.role;
    });
  }
  ifLogin(){
    this.storage.get('LoginInfo').then(loginInfo => {
      console.log(loginInfo);
      if (loginInfo&&loginInfo.token) {
        this.token = loginInfo.token;
        console.log('111',this.token);
        this.userInfo = loginInfo && loginInfo.user ? loginInfo.user : null;
        // 获取佣金,代理,团队等数据
        this.getMyInfo(this.token);
      }else{
        const loginModal = this.modalCtrl.create('LoginPage',{page: 'UserPage'});
        loginModal.present();
      }
    });
  }

  ionViewDidLoad() {

  }

  // 获取代理佣金,消费佣金,我的团队数据
  getMyInfo(token){
    this.userService.getMyInfo(token).subscribe(
      res => {
        console.log(res);
        this.myInfo = res;
      })
  }
  //去代理佣金
  pushAgent(){
    this.navCtrl.push('AgentCommissionPage');
  }
  //去分享好友
  pushShare(){
    this.navCtrl.push('ShareFriendsPage');
  }
  //去加入代理
  pushJoin(){
    this.navCtrl.push('JoinAgencyPage');
  }
  //去排行榜
  pushRank(){
    this.navCtrl.push('RankingListPage');
  }
  //去关于我们
  pushAbout(){
    this.navCtrl.push('AboutPage');
  }
  //去客服中心
  pushService(){
    this.navCtrl.push('ServiceCenterPage');
  }
  //去头像昵称设置
  pushSetting(){
    this.navCtrl.push('SettingPage');
  }

}
