import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data-service';

/**
 * Generated class for the SsummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ssummary',
  templateUrl: 'ssummary.html',
})
export class SsummaryPage {

  public StudentSummary = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
  }

  ionViewDidLoad() {
    this.dataService.getStudentSummary()
      .subscribe(
        (items: any[]) => {
          this.StudentSummary = items;
        },
        (error) => console.log(error)
      );
  }

}
