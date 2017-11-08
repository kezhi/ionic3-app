import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateSharePage } from './create-share';
import { ComponentsModule } from '../../../components/components.module';
@NgModule({
  declarations: [
    CreateSharePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateSharePage),ComponentsModule
  ],
})
export class CreateSharePageModule {}
