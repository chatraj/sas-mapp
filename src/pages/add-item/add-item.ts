import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { DataService } from '../../services/data-service';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})

export class AddItemPage {

  fullname: string;
  clsid: string;
  month: number;
  transport: string;
  tdid: number;
  clslist = [];
  monthlist = [];
  distancechoice = [];

  constructor(public navCtrl: NavController, public view: ViewController, private dataService: DataService) {

  }

  ionViewDidLoad(){
    this.dataService.getClassList()
      .subscribe(
        (items: any[]) => {
          this.clslist = items;
        },
        (error) => console.log(error)
      );
    this.dataService.getDistanceChoice()
        .subscribe(
          (items: any[]) => {
            this.distancechoice = items;
          },
          (error) => console.log(error)
      );
    this.monthlist = this.dataService.getMonthList();
  }

  saveItem(){
    let newItem = {
      fullname: this.fullname,
      clsid: this.clsid,
      month: this.month,
      transport: this.transport,
      tdid: this.tdid
    };
    this.view.dismiss(newItem);
  }

  close(){
    this.view.dismiss();
  }

}
