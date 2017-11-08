import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import {IonicStorageModule} from "@ionic/storage";

import { UserPage } from '../pages/user/user';
import { CategoryPage } from '../pages/category/category';
import { CategoryService } from '../pages/category/category.service';
import { HomePage } from '../pages/home/home';
import { HomeService } from '../pages/home/home.service';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule } from '../components/components.module';
// import {SuperTabsModule} from "ionic2-super-tabs";
import { Camera } from '@ionic-native/camera';
import { NativeService } from '../providers/native-service';
import { GlobalData } from '../providers/global-data';

@NgModule({
  declarations: [
    MyApp,
    UserPage,
    CategoryPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',
      backButtonText: '',
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserPage,
    CategoryPage,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoryService,
    HomeService,
    NativeService,
    GlobalData,
    Camera
  ]
})
export class AppModule {}
