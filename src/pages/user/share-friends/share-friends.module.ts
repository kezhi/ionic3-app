import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareFriendsPage } from './share-friends';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  declarations: [
    ShareFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShareFriendsPage),ComponentsModule
  ],
})
export class ShareFriendsPageModule {}
