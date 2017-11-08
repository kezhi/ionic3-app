import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { IonProductsComponent } from './ion-products/ion-products';
import { IonClassifyComponent } from './ion-classify/ion-classify';
import { IonSlideContentComponent } from './ion-slide-content/ion-slide-content';
import { IonShareComponent } from './ion-share/ion-share';

@NgModule({
	declarations: [IonProductsComponent, IonClassifyComponent,
    IonSlideContentComponent,
    IonShareComponent],
	imports: [IonicModule],
	exports: [IonProductsComponent, IonClassifyComponent,
    IonSlideContentComponent,
    IonShareComponent]
})
export class ComponentsModule { }
