import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from './../../components/components.module';
import { ProductViewPage } from './product-view';

@NgModule({
  declarations: [
    ProductViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductViewPage),ComponentsModule
  ],
})
export class ProductViewPageModule {}
