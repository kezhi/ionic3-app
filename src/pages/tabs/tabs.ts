import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserPage } from '../user/user';
import { CategoryPage } from '../category/category';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = 'ListPage';
  tab3Root = CategoryPage;
  tab4Root = UserPage;


  constructor(public navCtrl: NavController) {

  }

}
