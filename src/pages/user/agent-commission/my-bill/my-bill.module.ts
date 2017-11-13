import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBillPage } from './my-bill';

@NgModule({
  declarations: [
    MyBillPage,
  ],
  imports: [
    IonicPageModule.forChild(MyBillPage),
  ],
})
export class MyBillPageModule {}
