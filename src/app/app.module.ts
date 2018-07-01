import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { CollectionPage } from '../pages/collection/collection';
import { AdjustmentPage } from '../pages/adjustment/adjustment';
import { ReportPage } from '../pages/report/report';
import { SsummaryPage } from '../pages/ssummary/ssummary';
import { DataService } from '../services/data-service';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    TabsPage,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    CollectionPage,
    AdjustmentPage,
    ReportPage,
    SsummaryPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    TabsPage,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    CollectionPage,
    AdjustmentPage,
    ReportPage,
    SsummaryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
  ]
})
export class AppModule {}
