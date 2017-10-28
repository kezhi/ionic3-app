import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateSharePage } from './create-share';

@NgModule({
  declarations: [
    CreateSharePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateSharePage),
  ],
})
export class CreateSharePageModule {}
