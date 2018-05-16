import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data-service';

/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})

export class CollectionPage {
  fullname;
  ssid;
  month = 4;
  amount;

  feeSummary = {};

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, public dataService: DataService) {
  }

  ionViewDidLoad(){
    this.fullname = this.navParams.get('item').fullname;
    this.ssid = this.navParams.get('item').ssid;
    this.dataService.getFeeSummary(this.ssid, 12)
      .subscribe(
        (fsummary: any) => {
          this.feeSummary = fsummary;
        },
        (error) => console.log(error)
      );
  }

  saveItem(){
    let newItem = {
      ssid: this.ssid,
      month: this.month,
      amount: this.amount
    };
    this.view.dismiss(newItem);
  }

  close(){
    this.view.dismiss();
  }

}
