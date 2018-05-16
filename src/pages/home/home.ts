import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { CollectionPage } from '../collection/collection';
import { ItemDetailPage } from '../item-detail/item-detail';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public items = [];
public clsid = 1;
public clslist = [];

constructor(public navCtrl: NavController, public modalCtrl: ModalController, private dataService: DataService) {
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
          this.items = items;
        },
        (error) => console.log(error)
      );

  }

  addItem(){

    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {

          if(item){
            this.saveItem(item);
          }

    });

    addModal.present();

  }

  saveItem(item){
    this.clsid = item.clsid;
    this.dataService.addItem(item)
      .subscribe(
        (response) => {
          console.log(response);
          this.onClassChange();
        },
        (error) => console.log(error)
      );

  }

  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
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
        },
        (error) => console.log(error)
      );
  }

}
