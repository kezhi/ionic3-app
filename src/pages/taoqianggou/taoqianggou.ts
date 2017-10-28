import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaoqianggouService } from './taoqianggou.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

/**
 * Generated class for the TaoqianggouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taoqianggou',
  templateUrl: 'taoqianggou.html',
  providers: [TaoqianggouService]
})
export class TaoqianggouPage {
  liveIndex: any = [];
  products: any = [];
  liveOn: boolean;
  constructor(private http: Http, navCtrl: NavController, public navParams: NavParams, public taoqianggouService: TaoqianggouService) {
    // console.log(this.taoqianggouService.getLiveIndex())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaoqianggouPage');
    this.getLiveIndex();
    this.getOneLiveGoods();
  }
  /*getLiveGoods(live){
    this.taoqianggouService.getLiveGoods(live).subscribe(
      result => {
        this.liveGoods = result.list;
      }
    )
  }*/
  getLiveIndex(){
     this.taoqianggouService.getLiveIndex().subscribe(
      result => {
       let resultList = result.list;
        resultList.forEach(function (index) {
          if(index.ifLiving == 0){
            index.ifLivingName = '已开抢';
          }else if(index.ifLiving == 1){
            index.ifLivingName = '正在抢购';
          }else{
            index.ifLivingName = '即将开抢';
          }
         },this);

        this.liveIndex = resultList;
        console.log(result);
      })
  }


  getOneLiveGoods(){
    this.http.get('app/liveIndex.api?partnerId=888')
      .map(res => res.json())
      .mergeMap(rel => {
        console.log(rel.list.length);
        let lives = rel.list;
        for(let i = 0; i<lives.length; i++){
          console.log(lives[i]);
          if(lives[i].ifLiving == 1){
            return this.http.get('app/goods/getLiveGoods.api?partnerId=888&dayType='+lives[i].dayType+'&liveTimeId='+lives[i].id)
              .map(res => res.json())
          }
        }
      })
      .subscribe(data => {
        this.products = data.list;
        console.log(this.products)
      });

  }
  select(live,liveOn){
    console.log(live);
    liveOn = true;
    this.taoqianggouService.getLiveGoods(live).subscribe(
      result => {
        this.products = result.list;
      })
  }

}
