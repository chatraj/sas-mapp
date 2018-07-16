import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AdminPage } from '../admin/admin';
import { ReportPage } from '../report/report';
import { TabsPage } from '../tabs/tabs';


export interface PageInterface {
  title: string;
  pageName?: any;
  tabComponent?: any;
  index?: number;
  icon: string;
}

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = HomePage;

  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Home', pageName: HomePage, icon: 'home' },
    { title: 'Admin', pageName: AdminPage,  icon: 'help-buoy' },
    { title: 'Report', pageName: TabsPage, tabComponent: 'TabsPage', index: 0, icon: 'analytics' },
    { title: 'Setting', pageName: ReportPage,  icon: 'cog' }
  ];

  constructor(public navCtrl: NavController) { }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

}
