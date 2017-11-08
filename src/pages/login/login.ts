import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,Events, ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {FormBuilder, Validators} from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { LoginService } from './login.service';
import { GlobalData } from "../../providers/global-data";
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
  mobile: string;
  randCode: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private events: Events,
              public toastCtrl: ToastController,
              private storage: Storage,
              private globalData: GlobalData
  ) {
    /*this.loginForm = this.formBuilder.group({
      mobile: ['15811012797', [Validators.required, Validators.minLength(4)]],// 第一个参数是默认值
      randCode: ['867867', [Validators.required, Validators.minLength(4)]]
    });*/
    // this.user = {mobile:mobile,randCode:randCode};
    this.mobile = '15811012797';
    this.randCode = '8012';
    console.log(this.navParams.get('page'))
  }

  ionViewWillEnter() {
    this.storage.get('LoginInfo').then(loginInfo => {
      this.userInfo = loginInfo && loginInfo.user ? loginInfo.user : null;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goLogin(mobile,randCode){
    console.log(mobile,randCode);
    let user = {
      mobile: mobile,
      randCode: randCode
    };
    this.loginService.RandCodeLogin(user).subscribe(
      loginInfo => {
        console.log(loginInfo);
        let info = <any> loginInfo;
        if(info.status == 200){
          this.storage.remove('loginInfo');//清除缓存
          this.submitted = false;
          this.globalData.token = info.token;
          this.events.publish('user:login', loginInfo);
          this.storage.set('LoginInfo', loginInfo);
          this.viewCtrl.dismiss(loginInfo);
        }else{
          let toast = this.toastCtrl.create({
            message: info.result,
            duration: 2000
          });
          toast.present();
        }

      },() => {
        this.submitted = false;
      }
    )
  }
  // 获取验证码
  getCode(mobile){
    this.loginService.sendLoginCode(mobile).subscribe(
      res=>{
        console.log(res);
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
