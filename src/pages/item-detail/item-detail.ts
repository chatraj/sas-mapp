import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, ModalController } from 'ionic-angular';
import { DataService } from '../../services/data-service';
import { CollectionPage } from '../collection/collection';
import { AdjustmentPage } from '../adjustment/adjustment';

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

  //fullname;
  //ssid;
  //month = 4;
  //amount;

  public item = {};

  public feeSummary = {};

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: DataService){

  }

  ionViewDidLoad(){
    console.log('Getting Item Detail');
    //this.fullname = this.navParams.get('item').fullname;
    //this.ssid = this.navParams.get('item').ssid;
    this.item = this.navParams.get('item');
    this.getFeeData(this.navParams.get('item').ssid);
  }

  getFeeData(ssid){
    this.dataService.getFeeSummary(ssid)
      .subscribe(
        (fsummary: any) => {
          this.feeSummary = fsummary;
        },
        (error) => console.log(error)
      );
  }

  feeCollection(item){
    let addModal = this.modalCtrl.create(CollectionPage, {
      item: item
    });
    addModal.onDidDismiss((item) => {
          if(item){
            this.saveCollection(item);
          }
    });
    addModal.present();
  }

  saveCollection(item){
    this.dataService.addCollection(item)
      .subscribe(
        (response) => {
          console.log(response);
          this.getFeeData(this.navParams.get('item').ssid);
        },
        (error) => console.log(error)
      );
  }

  feeAdjustment(item){
    let addModal = this.modalCtrl.create(AdjustmentPage, {
      item: item
    });
    addModal.onDidDismiss((item) => {
          if(item){
            this.saveAdjustment(item);
          }
    });
    addModal.present();
  }

  saveAdjustment(item){
    this.dataService.addAdjustment(item)
      .subscribe(
        (response) => {
          console.log(response);
          this.getFeeData(this.navParams.get('item').ssid);
        },
        (error) => console.log(error)
      );
  }

  goback() {
      this.navCtrl.pop();
  }

}
