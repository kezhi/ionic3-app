import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { UserPage } from '../pages/user/user';
// import { ListPage } from '../pages/list/list';
import { CategoryPage } from '../pages/category/category';
import { CategoryService } from '../pages/category/category.service';
// import { VideoListPage } from '../pages/video-list/video-list';
// import { VideoListService } from '../pages/video-list/video-list.service';

import { VideoPage } from '../pages/video/video';

import { HomePage } from '../pages/home/home';
import { HomeService } from '../pages/home/home.service';
import { TabsPage } from '../pages/tabs/tabs';

// import { SearchPage } from '../pages/search/search';

import { ProductViewPage } from '../pages/product-view/product-view';
import { ProductViewService } from '../pages/product-view/product-view.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsModule } from '../components/components.module';
// import { IonProductsComponent } from '../components/ion-products/ion-products';
// import { IonProductsService } from '../components/ion-products/ion-products.service';

// import { IonScrollableTabsComponent } from '../components/ion-scrollable-tabs/ion-scrollable-tabs';

import {SuperTabsModule} from "ionic2-super-tabs";

@NgModule({
  declarations: [
    MyApp,
    UserPage,
    // ListPage,
    CategoryPage,
    HomePage,
    TabsPage,
    ProductViewPage,
    // VideoListPage,
    VideoPage,
    // SearchPage,
    // ComponentsModule,
    // IonScrollableTabsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',
      backButtonText: '',
    }),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserPage,
    // ListPage,
    CategoryPage,
    HomePage,
    // SearchPage,
    TabsPage,
    ProductViewPage,
    // VideoListPage,
    VideoPage,
    // ComponentsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // IonProductsService,
    CategoryService,
    // VideoListService,
    HomeService,
    ProductViewService
  ]
})
export class AppModule {}
