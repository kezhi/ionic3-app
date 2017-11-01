import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { ListService } from './list.service';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'list.html',
  providers: [ListService]
})
export class ListPage {
  products: any = [];
  param: any;
  goodsListStyle: string = '3-1-0-1';
  errorMessage: string;
  type:string = 'all';
  sortObj: any = {
    catId:'',
    ifSuperDiscount: '',
    st: 1,
    sortType: '',
    params:''
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public listService: ListService) {
    function isEmptyObject(e) {
      var t;
      for (t in e)
        return !1;
      return !0
    }
    if(this.navParams.get('mainNav')){//从首页主导航进来
      this.param = this.navParams.get('mainNav');
      this.goodsListStyle = this.param.listViewType;
      if(isEmptyObject(this.param.params)){
        this.sortObj.params = '';
      }else{
        this.sortObj.params = this.param.params;
      }
    }else if(this.navParams.get('category')){//从分类进来
      this.param = this.navParams.get('category');
      this.param.title = this.navParams.get('category').name;
      this.goodsListStyle = '3-1-0-1';
      this.sortObj.catId = this.param.id;
    }else{//从超级划算进
      this.param = {title:'超级划算'};
      this.sortObj.ifSuperDiscount = 1;
    }
    console.log(this.param);
  }

  ngOnInit(): void {
    this.getGoodsList(this.sortObj);
  }
  getGoodsList(sortObj) {
    this.listService.getGoodsList(sortObj).subscribe(
        result => {
          if(sortObj.st==1){
            this.products = result.list;
          }else{
            this.products = this.products.concat(result.list);
          }
        },
        error => this.errorMessage = <any>error);
  }


  sortType(type){
    this.sortObj.st = 1;
    if(type == 'afterCoupon'){
      if(this.sortObj.sortType == 4){
        this.sortObj.sortType = 3;
      }else{
        this.sortObj.sortType = 4;
      }
    }else if(type == 'coupon'){
      console.log('coupon');
      if(this.sortObj.sortType == 6){
        this.sortObj.sortType = 5;
      }else{
        this.sortObj.sortType = 6;
      }
    }else if(type == 'sales'){
      this.sortObj.sortType = 8;
    }else{
      this.sortObj.sortType = '';
    }
    console.log(this.sortObj);
    this.getGoodsList(this.sortObj);
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.sortObj.st=this.sortObj.st+1;
    console.log(this.sortObj.st);
    setTimeout(() => {
      this.getGoodsList(this.sortObj);
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
