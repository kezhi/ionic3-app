import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,Events } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {FormBuilder, Validators} from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { LoginService } from './login.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {
  userInfo: any;
  submitted: boolean = false;
  loginForm: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private events: Events,
              private storage: Storage) {
    this.loginForm = this.formBuilder.group({
      mobile: ['15811012797', [Validators.required, Validators.minLength(4)]],// 第一个参数是默认值
      randCode: ['867867', [Validators.required, Validators.minLength(4)]]
    });
  }

  ionViewWillEnter() {
    this.storage.get('LoginInfo').then(loginInfo => {
      this.userInfo = loginInfo && loginInfo.user ? loginInfo.user : null;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  goLogin(user){
    console.log(user);
    this.loginService.RandCodeLogin(user).subscribe(
      loginInfo => {
        console.log(loginInfo);
        this.storage.clear();//清除缓存
        this.submitted = false;
        this.userInfo = loginInfo.user;
        this.events.publish('user:login', loginInfo);
        this.storage.set('LoginInfo', loginInfo);
        this.viewCtrl.dismiss(loginInfo.user);
      },() => {
        this.submitted = false;
      }
    )
  }
  // 登录方式
  loginMethod(type){
    if(type == 0){
      // 游客登录
      this.viewCtrl.dismiss();
      this.navCtrl.setRoot(TabsPage);
    }else{
      // 微信登录


    }
  }

}
