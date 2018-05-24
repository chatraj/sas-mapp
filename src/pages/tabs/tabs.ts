import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { SsummaryPage } from '../ssummary/ssummary';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = ReportPage;
  tab2Root: any = SsummaryPage;
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      // Set the active tab based on the passed index from menu.ts
      this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }



}
