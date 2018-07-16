import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data-service';
/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  public feeSummaryClassWise = [];

  public feeSummaryMonthWise = [];

  public rtype = 'class';

  public monthlist = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
  }

  ionViewDidLoad() {
    this.getClassWiseData();
    this.monthlist = this.dataService.getMonthList();
  }

  public onTypeChange(){
    if (this.rtype == 'class')
      this.getClassWiseData();
    else
      this.getMonthWiseData();
  }

  getClassWiseData(){
    this.dataService.getFeeSummaryReport('class')
      .subscribe(
        (items: any[]) => {
          this.feeSummaryClassWise = items;
        },
        (error) => console.log(error)
      );
  }

  getMonthWiseData(){
    this.dataService.getFeeSummaryReport('month')
      .subscribe(
        (items: any[]) => {
          this.feeSummaryMonthWise = items;
        },
        (error) => console.log(error)
      );
  }

  public getSum(column) : number {
    let sum = 0;
    let objArray = [];

    if (this.rtype == 'class')
      objArray = this.feeSummaryClassWise;
    else
      objArray = this.feeSummaryMonthWise;

    for(let i = 0; i < objArray.length; i++) {
      sum += objArray[i][column];
    }
    return sum;
  }

}
