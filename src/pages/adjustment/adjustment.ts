import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import { DataService } from '../../services/data-service';
/**
 * Generated class for the AdjustmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-adjustment',
  templateUrl: 'adjustment.html',
})
export class AdjustmentPage {
  fullname;
  ssid;
  atype = "DS";
  areason;
  amount;

  feeSummary = {};

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, public alertCtrl: AlertController, public dataService: DataService) {
  }

  ionViewDidLoad(){
    this.fullname = this.navParams.get('item').fullname;
    this.ssid = this.navParams.get('item').ssid;
    this.dataService.getFeeSummary(this.ssid)
      .subscribe(
        (fsummary: any) => {
          this.feeSummary = fsummary;
        },
        (error) => console.log(error)
      );
  }

  validateData(){
    if (this.amount && this.amount > 0 && this.areason && this.areason != "")
      this.showConfirm();
    else
      this.showAlert();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are your sure to save the data',
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
      subTitle: 'Please enter the amount & reason both',
      buttons: ['OK']
    });
    alert.present();
  }


  saveItem(){
    let newItem = {
      ssid: this.ssid,
      atype: this.atype,
      areason: this.areason,
      amount: this.amount
    };
    this.view.dismiss(newItem);
  }

  close(){
    this.view.dismiss();
  }

}
