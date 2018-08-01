import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { DataService } from '../../services/data-service';
import { DropoutPage } from '../dropout/dropout';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  public clsid = 1;
  public clslist = [];

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController, public dataService: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  actionConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'This action will move all collection data to previous month, are your sure to take this action',
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
            this.paymentPosting();
          }
        }
      ]
    });
    confirm.present();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Collection data has been moved to previous month',
      buttons: ['OK']
    });
    alert.present();
  }

  paymentPosting(){
    this.dataService.paymentPosting()
      .subscribe(
        (response) => {
          console.log(response);
          this.showAlert();
        },
        (error) => console.log(error)
      );
  }

  commingSoon() {
    const alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Feature to be added in future',
      buttons: ['OK']
    });
    alert.present();
  }

  studentDropout(){
    let addModal = this.modalCtrl.create(DropoutPage, {});
    addModal.onDidDismiss((item) => {
          if(item){
            this.saveDropout(item);
          }
    });
    addModal.present();
  }

  saveDropout(item){
    this.dataService.saveDropout(item)
      .subscribe(
        (response) => {
          console.log(response);
          //this.getFeeData(this.navParams.get('item').ssid);
        },
        (error) => console.log(error)
      );
  }

}
