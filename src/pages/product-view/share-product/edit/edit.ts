import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppPreferences} from "@ionic-native/app-preferences";
import {Http} from "@angular/http";

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  // explainTextUrl: string = "http://laike.jfapps.com/app/user/stIns.api?partnerId=888&token=ffce1784-86ed-42cc-b539-823d75071267";
  // saveContentBaseUrl: string = "http://laike.jfapps.com/app/user/stIns.api?token=ffce1784-86ed-42cc-b539-823d75071267&ifValid=1&";

  explainTextUrl: string = "/app/user/stIns.api?partnerId=888&token=ffce1784-86ed-42cc-b539-823d75071267";
  saveContentBaseUrl: string = "/app/user/stIns.api?token=ffce1784-86ed-42cc-b539-823d75071267&ifValid=1&";


  previewContent: string = "";
  textContent: string = "";         //临时的预览，最终要被删除
  textArr: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private appPreferences: AppPreferences, public http: Http) {
    this.previewContent = this.navParams.data;
    this.loadData();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad EditPage');
  }

  loadData() {
    this.http.get(this.explainTextUrl)
      .map(res => res.json())
      .subscribe(res => {
        this.textArr = res.list;
      });
  }


  previewHandlerClick() {
    // this.textContent = this.previewContent;
  }


  saveHandlerClick() {
    this.http.post(this.saveContentBaseUrl + this.previewContent, "")
      .subscribe(res => {
        console.log(res);
      });
  }

}
