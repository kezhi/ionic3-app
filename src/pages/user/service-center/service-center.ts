import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceCenterService } from './service-center.service';

/**
 * Generated class for the ServiceCenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-center',
  templateUrl: 'service-center.html',
  providers: [ServiceCenterService]
})
export class ServiceCenterPage {
  serviceInfo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private serviceCenterService: ServiceCenterService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceCenterPage');
    this.getServiceInfo();
  }

  getServiceInfo(){
    this.serviceCenterService.getServiceInfo().subscribe(res => {
      console.log(res);
      this.serviceInfo = res;
    })
  }

}
