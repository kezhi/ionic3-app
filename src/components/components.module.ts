import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { IonProductsComponent } from './ion-products/ion-products';
import { IonClassifyComponent } from './ion-classify/ion-classify';

@NgModule({
	declarations: [IonProductsComponent, IonClassifyComponent],
	imports: [IonicModule],
	exports: [IonProductsComponent, IonClassifyComponent]
})
export class ComponentsModule { }
