import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareProductPage } from './share-product';

@NgModule({
  declarations: [
    ShareProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ShareProductPage),
  ],
})
export class ShareProductPageModule {}
