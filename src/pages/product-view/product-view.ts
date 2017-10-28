import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Slides } from 'ionic-angular';
import { ProductViewService } from './product-view.service';
/**
 * Generated class for the ProductViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  constructor(public navCtrl: NavController,public navParams: NavParams, public productViewService:ProductViewService) {
    this.product = this.navParams.get('item');

  }
  @ViewChild(Slides) slides: Slides;

  ionViewDidLoad() {
    // this.getGoodView();
    this.getGoodImgs();
    this.getGoodsGuess();
    console.log('ionViewDidLoad ProductViewPage');

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
  feedback(){
    this.navCtrl.push('FeedbackPage');
  }
}
