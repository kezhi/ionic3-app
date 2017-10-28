/**
 * Created by kezhi on 2017/10/16.
 */
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';

@NgModule({
  declarations: [
    ListPage
  ],
  imports: [
    IonicPageModule.forChild(ListPage),ComponentsModule
  ],
  exports: [
    ListPage
  ]
})
export class ListPageModule { }
