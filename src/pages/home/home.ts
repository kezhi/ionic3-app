import { Component,ViewChild } from '@angular/core';
import { NavController,Slides,Content } from 'ionic-angular';
import { HomeService } from './home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {
  products: any = [];   //列表数据
  catList: any = [];   //列表数据
  mainNavs: any = [];  //分类导航数据
  bannerList: any = [];  //轮播图数据
  classifyArr: any = [];   //分类数据
  menuList: any = [];   //分类数据
  bannerListLen: number;
  goodsListStyle: string;  //列表样式
  classifyStyle: string;   //分类模块样式
  errorMessage: string;
  sortObj:any = {
    st:1
  };
  catObj: any = {
    st:1,
    id:1
  };
  menuOn = 0;
  menu_segment = 'menu_0';

  _refresher = null;
  oldCatList = [];
  constructor(public navCtrl: NavController, public HomeService: HomeService) {

  }

  @ViewChild(Slides) slides: Slides;
  @ViewChild(Content) content: Content;

  slideChanged() {
    // let currentIndex = this.slides.getActiveIndex();
    // console.log('Current index is', currentIndex);
  }

  ionViewDidLoad(): void {
    this.getGoodsList(this.sortObj);
    this.getGoodsListStyle();
    // this.getCatList(this.catObj);
  }

  select(menu) {
    // this.slider.slideTo(menu.index, 300);
    this.menuOn = menu.index;
    if(menu==0){
      this.menu_segment = 'menu_0';
      this.menuOn = 0;
    }else{
      this.menu_segment = 'menu_1';
      this.catObj = {
        st:1,
        id: menu.id
      };
      this.getCatList(this.catObj);
    }
    this.content.scrollToTop(0);
  }
  /*onSlideChanged(){
    let currentIndex = this.slider.getActiveIndex();
    console.log(currentIndex)
    if(!currentIndex==0){
      this.catObj = {
        st:1,
        id: 1
      };
      this.getCatList(this.catObj);
    }
  }
  panEvent(e) {
    let currentIndex = this.slider.getActiveIndex();
    /!*if (currentIndex === 0){
      this.menu_segment = 'menu_0';
    }
    if (currentIndex === 1){
      this.menu_segment = 'menu_1';
    }*!/
    // console.log(currentIndex)
  }*/

  getGoodsListStyle() {
    this.HomeService.getGoodsListStyle()
      .subscribe(
        result => {
          let resultList = <any> result;
          this.goodsListStyle = resultList.goodsListStyle;
          if(resultList.list[0].styleType == '2-10-0'){
            this.mainNavs = resultList.list[0].cateInfoList;
          }else{
            this.mainNavs = resultList.list[0].cateInfoList.slice(0,5);
          }
          this.classifyArr = resultList.list[1].cateInfoList;
          this.classifyStyle = resultList.list[1].styleType;
        },
        error =>  this.errorMessage = <any>error);
  };

  getGoodsList(sortObj) {
    this.HomeService.getGoodsList(sortObj)
      .subscribe(
        result => {
          let resultList = <any> result;
          if(sortObj.st==1){
            this.products = resultList.list;
            this.bannerListLen = resultList.bannerList.length;
            this.bannerList = resultList.bannerList;
            for(let i = 0;i<resultList.catList.length; i++){
              resultList.catList[i].index = i+1;
            }
            this.menuList = resultList.catList;
            console.log(this.menuList);
          }else{
            this.products = this.products.concat(resultList.list);
          }
        },
        error => this.errorMessage = <any>error);
  }
  getCatList(catObj){
    this.HomeService.getCatList(catObj).subscribe(
      result => {
        console.log(result);
        let resultList = <any> result;
        if(catObj.st==1){
          this.catList = resultList;
        }else{
          this.catList = this.catList.concat(resultList);
        }
        if (this._refresher) {
          this._refresher.complete();
        }
        if(this.oldCatList.length > 0){
          this.catList.splice(0,this.oldCatList.length);
          this.oldCatList = [];
        }
      }
    )
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
  doInfiniteList(infiniteScroll) {
    this.catObj.st = this.catObj.st+1;
    setTimeout(() => {
      this.getCatList(this.catObj);
      infiniteScroll.complete();
    }, 500);
  }

  doRefresh(refresher) {
    this.oldCatList = this.catList;
    this.getCatList(this.catObj);

    this._refresher = refresher;
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}

