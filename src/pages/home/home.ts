import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { HomeService } from './home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {
  products: any;   //列表数据
  mainNavs: any = [];  //分类导航数据
  bannerList: any = [];  //轮播图数据
  classifyArr: any = [];   //分类数据
  bannerListLen: number;
  goodsListStyle: string;  //列表样式
  classifyStyle: string;   //分类模块样式
  errorMessage: string;
  sortObj = {
    st:1
  };
  constructor(public navCtrl: NavController, public HomeService: HomeService) {

  }

  @ViewChild(Slides) slides: Slides;

  slideChanged() {
    // let currentIndex = this.slides.getActiveIndex();
    // console.log('Current index is', currentIndex);
  }

  ionViewDidLoad(): void {
    this.getGoodsList(this.sortObj);
    this.getGoodsListStyle();
  }

  getGoodsListStyle() {
    this.HomeService.getGoodsListStyle()
      .subscribe(
        result => {
          this.goodsListStyle = result.list.goodsListStyle;
          if(result.list.list[0].styleType == '2-10-0'){
            this.mainNavs = result.list.list[0].cateInfoList;
          }else{
            this.mainNavs = result.list.list[0].cateInfoList.slice(0,5);
          }
          this.classifyArr = result.list.list[1].cateInfoList;
          this.classifyStyle = result.list.list[1].styleType;
        },
        error =>  this.errorMessage = <any>error);
  };

  getGoodsList(sortObj) {
    this.HomeService.getGoodsList(sortObj)
      .subscribe(
        result => {
          if(sortObj.st==1){
            this.products = result.list;
            this.bannerListLen = result.bannerList.length;
            this.bannerList = result.bannerList;
          }else{
            this.products = this.products.concat(result.list);
          }
        },
        error => this.errorMessage = <any>error);
  }
  pushList(mainNav){
    if(mainNav.listViewType==4){
      this.navCtrl.push('TaoqianggouPage',{mainNav:mainNav})
    }else{
      this.navCtrl.push('ListPage',{mainNav:mainNav})
    }
  }

  pushSearch(){
    this.navCtrl.push('SearchPage');
  }

  pushAdv(item){
    console.log(item);
    if(item.toDo == 1){
      this.navCtrl.push('ProductViewPage',{item:item.goods});
    }else{

    }
  }
  doInfinite(infiniteScroll) {
    this.sortObj.st = this.sortObj.st+1;
    setTimeout(() => {
      this.getGoodsList(this.sortObj);
      infiniteScroll.complete();
    }, 500);
  }

}

