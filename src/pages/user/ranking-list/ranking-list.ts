import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RankingListService} from './ranking-list.service';
/**
 * Generated class for the RankingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking-list',
  templateUrl: 'ranking-list.html',
  providers: [RankingListService]
})
export class RankingListPage {
  type: string = '1';
  rankList0: any = [];
  rankList1: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private rankingListService: RankingListService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingListPage');
    this.getRanking(this.type);
  }

  getRanking(type){
    this.rankingListService.getRanking(type).subscribe(
      res=>{
        let result = res;
        let result1 = [];
        result.forEach(function (item: any,i: number) {
          item.index = i+1;
          if(i>0){
            result1.push(item);
          }
        },this);
        this.rankList0 = result[0];
        this.rankList1 = result1;
        console.log(this.rankList1);
      }
    )
  }

  // 选择tab
  select(type){
    this.getRanking(type);
  }
}
