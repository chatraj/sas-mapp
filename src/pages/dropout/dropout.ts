import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { DataService } from '../../services/data-service';

/**
 * Generated class for the DropoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dropout',
  templateUrl: 'dropout.html',
})

export class DropoutPage {
  ssid;
  amount;

  public studentlist = [];
  public clsid = 1;
  public clslist = [];
  //public feeSummary = {};

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, public alertCtrl: AlertController, public dataService: DataService) {
  }

  ionViewDidLoad(){
    this.dataService.getClassList()
      .subscribe(
        (items: any[]) => {
          this.clslist = items;
          this.onClassChange();
        },
        (error) => console.log(error)
      );
  }

  onClassChange(){
    this.dataService.getClassWiseStudent(this.clsid)
      .subscribe(
        (items: any[]) => {
          this.studentlist = items;
        },
        (error) => console.log(error)
      );
  }

  getFeeSummary(){
    this.dataService.getFeeSummary(this.ssid)
      .subscribe(
        (fsummary: any) => {
          //this.feeSummary = fsummary;
          console.log(fsummary);
          this.amount = fsummary.prevdues + (fsummary.curtotal - (fsummary.curpmt + fsummary.curdsc));
        },
        (error) => console.log(error)
      );
  }

  validateData(){
    if (this.ssid && this.amount)
      this.showConfirm();
    else
      this.showAlert();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you sure the student has left the school',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.saveItem();
          }
        }
      ]
    });
    confirm.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please select the class & studen both',
      buttons: ['OK']
    });
    alert.present();
  }

  saveItem(){
    let newItem = {
      ssid: this.ssid,
      amount: this.amount
    };
    this.view.dismiss(newItem);
  }

  close(){
    this.view.dismiss();
  }

}
