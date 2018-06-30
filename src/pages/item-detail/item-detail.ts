import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data-service';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  fullname;
  ssid;
  month = 4;
  amount;

  public feeSummary = {};

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, public dataService: DataService){

  }

  ionViewDidLoad(){
    console.log('Getting Item Detail');
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


}
