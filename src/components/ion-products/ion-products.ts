import { Component,Input } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { IonProductsService } from './ion-products.service';

import { ProductViewPage } from '../../pages/product-view/product-view';

/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-products',
  templateUrl: 'ion-products.html',
  // providers: [IonProductsService]
})
export class IonProductsComponent{
  errorMessage: string;
  @Input() products: any[];
  @Input() goodsListStyle: string;
   constructor(public navCtrl: NavController) {}  //public IonProductsService: IonProductsService

  /*ngOnInit(): void {
    this.getGoodsListStyle();
  }

  getGoodsListStyle() {
    this.IonProductsService.getGoodsListStyle()
      .subscribe(
        result => {
          this.goodsListStyle = result?result.list.goodsListStyle:'';
          console.log(this.goodsListStyle);
        },
        error =>  this.errorMessage = <any>error);
  }*/

  /*getGoodsList() {
    this.IonProductsService.getGoodsList()
      .subscribe(
        result => {
          this.goodsList = result?result.list:'';
          console.log(this.goodsList);
        },
        error =>  this.errorMessage = <any>error);
  }*/
  goDetails(item){
    this.navCtrl.push(ProductViewPage,{item:item})
  }
}
