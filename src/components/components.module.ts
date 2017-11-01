import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { IonProductsComponent } from './ion-products/ion-products';
import { IonClassifyComponent } from './ion-classify/ion-classify';
import { LoginComponent } from './login/login';

@NgModule({
	declarations: [IonProductsComponent, IonClassifyComponent,
    LoginComponent],
	imports: [IonicModule],
	exports: [IonProductsComponent, IonClassifyComponent,
    LoginComponent]
})
export class ComponentsModule { }
