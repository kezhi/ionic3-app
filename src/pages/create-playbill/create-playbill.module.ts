import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePlaybillPage } from './create-playbill';
@NgModule({
  declarations: [
    CreatePlaybillPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePlaybillPage)
  ]
})
export class CreatePlaybillPageModule {}
