import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { SearchService } from './search.service';
import {Storage} from "@ionic/storage";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [SearchService]
})
export class SearchPage {
  obj:{
    key: string
  };
  keyword: string;
  hotWords:any=[];
  products: any = [];
  productsLen: number = null;
  localValue: any = [];
  clearText: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private storage: Storage,
              private searchService: SearchService) {
    console.log(this.keyword);
  }

  ionViewDidLoad() {
    // this.localValue = this.storage.get('keywords')?this.storage.get('keywords'):[];//localStorage.getItem('keywords')?localStorage.getItem('keywords').split(','):[];
// console.log(this.localValue);
    //
    this.storage.get('keywords').then(keywords => {
      this.localValue = keywords?keywords.split(','):[];
      console.log(this.localValue);
      this.clearText = this.localValue&&this.localValue.length>0? '清除历史记录':'暂无搜索记录';
    });

    this.getHotWords();
  }

  getHotWords(){
    this.searchService.getHotWords().subscribe(
      result=>{
        this.hotWords = result;
      })
  }
  onSearch(keyword){
    this.keyword = keyword;
    this.obj = {
      key:keyword
    };
    if(keyword){
      this.searchService.getGoodsList(this.obj).subscribe(
        result => {
          this.products = result;
          this.productsLen = result.length;
          if(this.productsLen == 0){
            let toast = this.toastCtrl.create({
              message: '亲,您搜索的商品不存在,试试其他的关键词吧!',
              duration: 3000
            });
            toast.present();
          }
          console.log(this.products,this.productsLen)
        })
    }
    //存储关键词
    /*let val = this.storage.get('keywords');
    console.log(keyword);
    let localValue = val?val + ','+ keyword:keyword;
    console.log(localValue);*/
    this.storage.get('keywords').then(keywords => {
      console.log(keywords);
      let localValue = keywords?keywords + ','+ keyword:keyword;
      this.storage.set('keywords',localValue);
    });

  }
  clearHistory(){
    this.storage.remove('keywords');
    this.localValue = [];
  }

}
