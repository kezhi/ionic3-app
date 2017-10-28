import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { SearchService } from './search.service';

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
    keyword: string
  };
  keyword: string;
  hotWords:any=[];
  products: any = [];
  productsLen: number = null;
  localValue: any = [];
  clearText: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController, private searchService: SearchService) {
    console.log(this.keywords);

  }

  ionViewDidLoad() {
    this.localValue = localStorage.getItem('keywords')?localStorage.getItem('keywords').split(','):[];
    this.clearText = this.localValue.length>0? '清除历史记录':'暂无搜索记录';
    console.log('ionViewDidLoad SearchPage');
    this.getHotWords();
  }

  getHotWords(){
    this.searchService.getHotWords().subscribe(
      result=>{
        this.hotWords = result.list;
      })
  }
  onSearch(keyword){
    this.keyword = keyword;
    this.obj = {
      keyword:keyword
    };
    if(keyword){
      this.searchService.getGoodsList(this.obj).subscribe(
        result => {
          this.products = result.list;
          this.productsLen = result.list.length;
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
    let val = localStorage.getItem('keywords');
    console.log(keyword);
    let localValue = val?val + ','+ keyword:keyword;
    console.log(localValue);
    localStorage.setItem('keywords',localValue);
  }
  clearHistory(){
    localStorage.clear('keywords');
    this.localValue = [];
  }

}
