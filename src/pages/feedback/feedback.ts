import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import {NativeService} from '../../providers/native-service';
import {Storage} from "@ionic/storage";
import { FeedbackService } from "./feedback.service";
import {FormBuilder, Validators} from '@angular/forms';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
  providers: [FeedbackService]
})
export class FeedbackPage {
  drop: boolean = true;
  isChange: boolean = false;//头像是否改变标识
  avatarPath: string = './assets/img/qr_code.png';//用户默认头像
  imageBase64: string;//保存头像base64,用于上传
  user: any;
  feedbackList: any = [];
  feedback:string;
  feedbackText:string;
  product: any;
  feedType: number;
  feedForm: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private feedbackService: FeedbackService,
              public actionSheetCtrl: ActionSheetController,
              private nativeService: NativeService,
              private storage: Storage,
              private formBuilder: FormBuilder
  ) {
    if(this.navParams.get('product')){
      this.product = this.navParams.get('product');
      this.feedType = 0;
    }else{
      this.feedType = 1;
    }

    this.feedForm = this.formBuilder.group({
      feedback: [''],// 第一个参数是默认值
      feedbackText: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
    this.storage.get('LoginInfo').then(loginInfo => {
      this.user = loginInfo;
      this.getFeedback(this.user);
    });
  }

  getFeedback(user){
    this.feedbackService.getFeedback(user).subscribe(
      result => {
        this.feedbackList = result.list;
      }
    )
  }
  selectItem(feedback){
    this.feedback = feedback;
    this.drop = false;
  }
  select(){
    if(this.drop){
      this.drop = false;
    }else{
      this.drop = true;
    }
  }

  addImg(){
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '相机',
          role: '相机',
          handler: () => {
            console.log('相机');
            this.getPicture(1);
          }
        },
        {
          text: '相册',
          handler: () => {
            console.log('相册');
            this.getPicture(0);
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
  getPicture(type) {//1拍照,0从图库选择
    let options = {
      targetWidth: 400,
      targetHeight: 400
    };
    console.log(type);
    if (type == 1) {
      this.nativeService.getPictureByCamera(options).subscribe(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });
    } else {
      this.nativeService.getPictureByPhotoLibrary(options).subscribe(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });
    }
  }

  private getPictureSuccess(imageBase64) {
    alert('拍照OK');
    this.isChange = true;
    this.imageBase64 = <string>imageBase64;
    this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
  }

  // 提交反馈
  postFeedback(content){
    console.log(this.feedback,content,this.user);
    let param;
    if(this.feedType == 0){
      param = {
        partnerId:'888',
        token: this.user.token,
        goodsId: this.product.goodsId,
        des:this.feedback,
        content: content,
        type: this.feedType
      };
    }else{
      param = {
        partnerId:'888',
        token: this.user.token,
        goodsId: '',
        des:'',
        content: content,
        type: this.feedType
      };
    }

    this.feedbackService.postFeedback(param).subscribe(
      result => {
        console.log(result)
      }
    )
  }
}
