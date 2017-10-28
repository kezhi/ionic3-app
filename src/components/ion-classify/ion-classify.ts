import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the IonClassifyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-classify',
  templateUrl: 'ion-classify.html'
})
export class IonClassifyComponent {

  @Input() classifyArr: any[];
  @Input() classifyStyle: string;
  constructor(public navCtrl: NavController) {

  }

  pushList(mainNav){
    if(mainNav.listViewType == 3){
      this.navCtrl.push('VideoListPage',{mainNav:mainNav});
    }else{
      this.navCtrl.push('ListPage',{mainNav:mainNav});
    }
  }
}
