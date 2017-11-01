import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides,ModalController } from 'ionic-angular';
import { ProductViewService } from './product-view.service';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the ProductViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-view',
  templateUrl: 'product-view.html',
  providers:[ProductViewService]
})
export class ProductViewPage {
  product: any;
  productImgs: any [];
  proImgLen: number;
  productDetailImgs: string;
  productGuessList: any [];
  errorMessage: string;
  goodsListStyle: string = '3-1-0-1';
  constructor(public navCtrl: NavController,public navParams: NavParams,public modalCtrl: ModalController, public productViewService:ProductViewService, private storage: Storage) {
    this.product = this.navParams.get('item');

  }
  @ViewChild(Slides) slides: Slides;

  ionViewDidLoad() {
    this.getGoodImgs();
    this.getGoodsGuess();
  }

  slideChanged() {
    // let currentIndex = this.slides.getActiveIndex();
    // console.log('Current index is', currentIndex);
  }
  getGoodImgs() {
    this.productViewService.getGoodImgs()
      .subscribe(
        result => {
          this.proImgLen = result.images.length;
          this.productImgs = result.images;
        },
        error => this.errorMessage = <any>error);
  }
  getGoodDetail() {
    this.productViewService.getGoodDetail()
      .subscribe(
        result => {
          this.productDetailImgs = result.images;
        },
        error => this.errorMessage = <any>error);
  }
  getGoodsGuess(){
    this.productViewService.getGoodsGuess()
      .subscribe(
        result => {
          this.productGuessList = result.list;
          console.log(this.productGuessList);
        },
        error => this.errorMessage = <any>error);
  }
  lookDetail(){
    this.getGoodDetail();
  }
  shareProduct(){
    this.navCtrl.push('ShareProductPage');
  }
  feedback(product){
    this.storage.get('LoginInfo').then(loginInfo => {
      console.log(loginInfo.user.mobile);
      if (loginInfo.token) {
        this.navCtrl.push('FeedbackPage', {product: product});
      }else{
        const loginModal = this.modalCtrl.create('LoginPage');
        loginModal.present();
      }
    });
  }
}
