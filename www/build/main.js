webpackJsonp([2],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CollectionPage = (function () {
    function CollectionPage(navCtrl, view, navParams, alertCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.feeSummary = {};
    }
    CollectionPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fullname = this.navParams.get('item').fullname;
        this.ssid = this.navParams.get('item').ssid;
        this.dataService.getFeeSummary(this.ssid)
            .subscribe(function (fsummary) {
            _this.feeSummary = fsummary;
        }, function (error) { return console.log(error); });
    };
    CollectionPage.prototype.validateData = function () {
        if (this.amount && this.amount > 0)
            this.showConfirm();
        else
            this.showAlert();
    };
    CollectionPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are your sure to save the data',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.saveItem();
                    }
                }
            ]
        });
        confirm.present();
    };
    CollectionPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Please enter the collection amount',
            buttons: ['OK']
        });
        alert.present();
    };
    CollectionPage.prototype.saveItem = function () {
        var newItem = {
            ssid: this.ssid,
            amount: this.amount
        };
        this.view.dismiss(newItem);
    };
    CollectionPage.prototype.close = function () {
        this.view.dismiss();
    };
    CollectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collection',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\collection\collection.html"*/'<ion-header>\n\n  <ion-toolbar color="secondary">\n\n    <ion-title>\n\n      Fee Collection - {{fullname}}\n\n    </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      Total Outstanding     :- Rs. {{feeSummary.prevdues + (feeSummary.curtotal - (feeSummary.curpmt + feeSummary.curdsc))}}\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Amount</ion-label>\n\n      <ion-input type="text" [(ngModel)]="amount"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button full ion-button color="secondary" (click)="validateData()">Save</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\collection\collection.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], CollectionPage);
    return CollectionPage;
}());

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SsummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SsummaryPage = (function () {
    function SsummaryPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.StudentSummary = [];
    }
    SsummaryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataService.getStudentSummary()
            .subscribe(function (items) {
            _this.StudentSummary = items;
        }, function (error) { return console.log(error); });
    };
    SsummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ssummary',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\ssummary\ssummary.html"*/'<!--\n\n  Generated template for the ReportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Student Summary\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-grid>\n\n  <ion-row class="row header">\n\n    <ion-col class="col">\n\n      Class Name\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Student Count\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="row" *ngFor="let ss of StudentSummary">\n\n    <ion-col class="col">\n\n      {{ss.clsname}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ss.scount}}\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\ssummary\ssummary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], SsummaryPage);
    return SsummaryPage;
}());

//# sourceMappingURL=ssummary.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/report/report.module": [
		684,
		1
	],
	"../pages/ssummary/ssummary.module": [
		685,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        //api_endpoint = 'https://sas-dsapi-prod.herokuapp.com/';
        //api_endpoint = 'http://localhost:3000/';
        this.api_endpoint = '/';
        //monthlist = {"Apr":1, "May":2, "Jun":3, "Jul":4, "Aug":5, "Sep":6, "Oct":7, "Nov":8, "Dec":9, "Jan":10, "Feb":11, "Mar":12};
        this.monthlist = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
    }
    DataService.prototype.addItem = function (query) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post(this.api_endpoint + 'api/student', query, { headers: headers });
    };
    DataService.prototype.getItems = function () {
        console.log('calling getItems API');
        return this.http.get(this.api_endpoint + 'api/student')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    DataService.prototype.deleteItem = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.delete(this.api_endpoint + 'api/student/' + id, { headers: headers });
    };
    DataService.prototype.addStudent = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post(this.api_endpoint + 'api/student', data, { headers: headers });
    };
    DataService.prototype.getClassList = function () {
        return this.http.get(this.api_endpoint + 'api/class')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    DataService.prototype.getClassWiseStudent = function (id) {
        console.log('calling getItems API');
        return this.http.get(this.api_endpoint + 'api/student/class/' + id)
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    DataService.prototype.getFeeHead = function (id) {
        return this.http.get(this.api_endpoint + 'api/class/feehead/' + id)
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    DataService.prototype.getDistanceChoice = function () {
        return this.http.get(this.api_endpoint + 'api/transportfee')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    DataService.prototype.getFeeSummary = function (ssid) {
        return this.http.get(this.api_endpoint + 'api/fee/dues/' + ssid)
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    DataService.prototype.getFeeSummaryReport = function (rtype) {
        return this.http.get(this.api_endpoint + 'api/fee/summary/' + rtype)
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    DataService.prototype.getStudentSummary = function () {
        return this.http.get(this.api_endpoint + 'api/student/summary')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    DataService.prototype.addCollection = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post(this.api_endpoint + 'api/fee/collection', data, { headers: headers });
    };
    DataService.prototype.addAdjustment = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post(this.api_endpoint + 'api/fee/adjustment', data, { headers: headers });
    };
    DataService.prototype.saveDropout = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post(this.api_endpoint + 'api/student/dropout', data, { headers: headers });
    };
    DataService.prototype.paymentPosting = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post(this.api_endpoint + 'api/fee/paymentposting', {}, { headers: headers });
    };
    DataService.prototype.getMonthList = function () {
        return this.monthlist;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login Page</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button full (click)="doLogin()">Login</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_report__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl) {
        this.navCtrl = navCtrl;
        // Basic root for our content view
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.pages = [
            { title: 'Home', pageName: __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Admin', pageName: __WEBPACK_IMPORTED_MODULE_3__admin_admin__["a" /* AdminPage */], icon: 'help-buoy' },
            { title: 'Report', pageName: __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], tabComponent: 'TabsPage', index: 0, icon: 'analytics' },
            { title: 'Setting', pageName: __WEBPACK_IMPORTED_MODULE_4__report_report__["a" /* ReportPage */], icon: 'cog' }
        ];
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNav() && page.index != undefined) {
            this.nav.getActiveChildNav().select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page
            // In this case: moving to or from SpecialPage
            this.nav.setRoot(page.pageName, params);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNav();
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\menu\menu.html"*/'<!--\n\n  Generated template for the MenuPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{ p.title }}\n\n        </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<!-- main navigation -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item_add_item__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collection_collection__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_detail_item_detail__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, modalCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.items = [];
        this.clsid = 1;
        this.clslist = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataService.getClassList()
            .subscribe(function (items) {
            _this.clslist = items;
            _this.onClassChange();
        }, function (error) { return console.log(error); });
    };
    HomePage.prototype.onClassChange = function () {
        var _this = this;
        this.dataService.getClassWiseStudent(this.clsid)
            .subscribe(function (items) {
            _this.items = items;
        }, function (error) { return console.log(error); });
    };
    HomePage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_item_add_item__["a" /* AddItemPage */]);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveItem(item);
            }
        });
        addModal.present();
    };
    HomePage.prototype.saveItem = function (item) {
        var _this = this;
        this.clsid = item.clsid;
        this.dataService.addItem(item)
            .subscribe(function (response) {
            console.log(response);
            _this.onClassChange();
        }, function (error) { return console.log(error); });
    };
    HomePage.prototype.viewItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    HomePage.prototype.feeCollection = function (item) {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__collection_collection__["a" /* CollectionPage */], {
            item: item
        });
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveCollection(item);
            }
        });
        addModal.present();
    };
    HomePage.prototype.saveCollection = function (item) {
        this.dataService.addCollection(item)
            .subscribe(function (response) {
            console.log(response);
        }, function (error) { return console.log(error); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Hope Page\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addItem()"><ion-icon name="add-circle"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label>Select Class</ion-label>\n\n      <ion-select [(ngModel)]="clsid" (ionChange)="onClassChange()">\n\n        <ion-option *ngFor="let cl of clslist" [value]="cl.clsid">{{cl.clsname}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item *ngFor="let item of items" (click)="viewItem(item)">{{item.fullname}}</ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddItemPage = (function () {
    function AddItemPage(navCtrl, view, dataService) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.dataService = dataService;
        this.clslist = [];
        this.monthlist = [];
        this.distancechoice = [];
    }
    AddItemPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataService.getClassList()
            .subscribe(function (items) {
            _this.clslist = items;
        }, function (error) { return console.log(error); });
        this.dataService.getDistanceChoice()
            .subscribe(function (items) {
            _this.distancechoice = items;
        }, function (error) { return console.log(error); });
        this.monthlist = this.dataService.getMonthList();
    };
    AddItemPage.prototype.saveItem = function () {
        var newItem = {
            fullname: this.fullname,
            clsid: this.clsid,
            month: this.month,
            transport: this.transport,
            tdid: this.tdid
        };
        this.view.dismiss(newItem);
    };
    AddItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\add-item\add-item.html"*/'<ion-header>\n\n  <ion-toolbar color="secondary">\n\n    <ion-title>\n\n      Add Item\n\n    </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="fullname"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Class</ion-label>\n\n      <ion-select [(ngModel)]="clsid">\n\n        <ion-option *ngFor="let cl of clslist" [value]="cl.clsid">{{cl.clsname}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Fee Applicable From</ion-label>\n\n      <ion-select [(ngModel)]="month">\n\n        <ion-option *ngFor="let m of monthlist;  let i = index;" [value]="i+1">{{m}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Transport Applicable</ion-label>\n\n      <ion-select [(ngModel)]="transport">\n\n        <ion-option value="Y">Yes</ion-option>\n\n        <ion-option value="N">No</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf="transport == \'Y\'">\n\n      <ion-label floating>Distance Choice</ion-label>\n\n      <ion-select [(ngModel)]="tdid">\n\n        <ion-option *ngFor="let dc of distancechoice" [value]="dc.tdid">{{dc.distance}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <button full ion-button color="secondary" (click)="saveItem()">Save</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\add-item\add-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], AddItemPage);
    return AddItemPage;
}());

//# sourceMappingURL=add-item.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collection_collection__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adjustment_adjustment__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemDetailPage = (function () {
    function ItemDetailPage(navCtrl, view, navParams, modalCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        //fullname;
        //ssid;
        //month = 4;
        //amount;
        this.item = {};
        this.feeSummary = {};
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        console.log('Getting Item Detail');
        //this.fullname = this.navParams.get('item').fullname;
        //this.ssid = this.navParams.get('item').ssid;
        this.item = this.navParams.get('item');
        this.getFeeData(this.navParams.get('item').ssid);
    };
    ItemDetailPage.prototype.getFeeData = function (ssid) {
        var _this = this;
        this.dataService.getFeeSummary(ssid)
            .subscribe(function (fsummary) {
            _this.feeSummary = fsummary;
        }, function (error) { return console.log(error); });
    };
    ItemDetailPage.prototype.feeCollection = function (item) {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__collection_collection__["a" /* CollectionPage */], {
            item: item
        });
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveCollection(item);
            }
        });
        addModal.present();
    };
    ItemDetailPage.prototype.saveCollection = function (item) {
        var _this = this;
        this.dataService.addCollection(item)
            .subscribe(function (response) {
            console.log(response);
            _this.getFeeData(_this.navParams.get('item').ssid);
        }, function (error) { return console.log(error); });
    };
    ItemDetailPage.prototype.feeAdjustment = function (item) {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__adjustment_adjustment__["a" /* AdjustmentPage */], {
            item: item
        });
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveAdjustment(item);
            }
        });
        addModal.present();
    };
    ItemDetailPage.prototype.saveAdjustment = function (item) {
        var _this = this;
        this.dataService.addAdjustment(item)
            .subscribe(function (response) {
            console.log(response);
            _this.getFeeData(_this.navParams.get('item').ssid);
        }, function (error) { return console.log(error); });
    };
    ItemDetailPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\item-detail\item-detail.html"*/'<ion-header>\n\n  <ion-toolbar color="secondary">\n\n    <ion-title>\n\n      Fee Summary - {{item.fullname}}\n\n    </ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button icon-only (click)="feeAdjustment(item)"><ion-icon name="more"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n\n      Previous Balance  :- Rs. {{feeSummary.prevdues}}\n\n    </ion-item>\n\n    <ion-item>\n\n      Current Fee       :- Rs. {{feeSummary.curtotal}}\n\n    </ion-item>\n\n    <ion-item *ngIf="feeSummary.curpmt > 0">\n\n      Current Payment   :- Rs. {{feeSummary.curpmt}}\n\n    </ion-item>\n\n    <ion-item *ngIf="feeSummary.curdsc > 0">\n\n      Current Discount   :- Rs. {{feeSummary.curdsc}}\n\n    </ion-item>\n\n    <ion-item>\n\n      Total Balance     :- Rs. {{feeSummary.prevdues + (feeSummary.curtotal - (feeSummary.curpmt + feeSummary.curdsc))}}\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button ion-button color="secondary" (click)="goback()">Back</button>\n\n\n\n  <button ion-button color="secondary" (click)="feeCollection(item)">Collection</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\item-detail\item-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdjustmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AdjustmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdjustmentPage = (function () {
    function AdjustmentPage(navCtrl, view, navParams, alertCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.atype = "DS";
        this.feeSummary = {};
    }
    AdjustmentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fullname = this.navParams.get('item').fullname;
        this.ssid = this.navParams.get('item').ssid;
        this.dataService.getFeeSummary(this.ssid)
            .subscribe(function (fsummary) {
            _this.feeSummary = fsummary;
        }, function (error) { return console.log(error); });
    };
    AdjustmentPage.prototype.validateData = function () {
        if (this.amount && this.amount > 0 && this.areason && this.areason != "")
            this.showConfirm();
        else
            this.showAlert();
    };
    AdjustmentPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are your sure to save the data',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.saveItem();
                    }
                }
            ]
        });
        confirm.present();
    };
    AdjustmentPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Please enter the amount & reason both',
            buttons: ['OK']
        });
        alert.present();
    };
    AdjustmentPage.prototype.saveItem = function () {
        var newItem = {
            ssid: this.ssid,
            atype: this.atype,
            areason: this.areason,
            amount: this.amount
        };
        this.view.dismiss(newItem);
    };
    AdjustmentPage.prototype.close = function () {
        this.view.dismiss();
    };
    AdjustmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adjustment',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\adjustment\adjustment.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-title>\n      Fee Adjustment - {{fullname}}\n    </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      Total Outstanding     :- Rs. {{feeSummary.prevdues + (feeSummary.curtotal - (feeSummary.curpmt + feeSummary.curdsc))}}\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Type</ion-label>\n      <ion-select [(ngModel)]="atype">\n        <ion-option value="DS">Discount</ion-option>\n        <ion-option value="C">OneTime Fee</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Reason</ion-label>\n      <ion-input type="text" [(ngModel)]="areason"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Amount</ion-label>\n      <ion-input type="text" [(ngModel)]="amount"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button full ion-button color="secondary" (click)="validateData()">Save</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\adjustment\adjustment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], AdjustmentPage);
    return AdjustmentPage;
}());

//# sourceMappingURL=adjustment.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropout_dropout__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = (function () {
    function AdminPage(navCtrl, view, navParams, alertCtrl, modalCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.clsid = 1;
        this.clslist = [];
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.actionConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'This action will move all collection data to previous month, are your sure to take this action',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.paymentPosting();
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Collection data has been moved to previous month',
            buttons: ['OK']
        });
        alert.present();
    };
    AdminPage.prototype.paymentPosting = function () {
        var _this = this;
        this.dataService.paymentPosting()
            .subscribe(function (response) {
            console.log(response);
            _this.showAlert();
        }, function (error) { return console.log(error); });
    };
    AdminPage.prototype.commingSoon = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Feature to be added in future',
            buttons: ['OK']
        });
        alert.present();
    };
    AdminPage.prototype.studentDropout = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__dropout_dropout__["a" /* DropoutPage */], {});
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveDropout(item);
            }
        });
        addModal.present();
    };
    AdminPage.prototype.saveDropout = function (item) {
        this.dataService.saveDropout(item)
            .subscribe(function (response) {
            console.log(response);
            //this.getFeeData(this.navParams.get('item').ssid);
        }, function (error) { return console.log(error); });
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\admin\admin.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Admin Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      Data Correction\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item (click)="actionConfirm()">\n        <ion-icon name="navigate" item-start></ion-icon>\n        Payment Posting to Previous Month\n      </button>\n\n      <button ion-item (click)="studentDropout()">\n        <ion-icon name="trash" item-start></ion-icon>\n        Student Drop Out\n      </button>\n\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DropoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DropoutPage = (function () {
    //public feeSummary = {};
    function DropoutPage(navCtrl, view, navParams, alertCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.dataService = dataService;
        this.studentlist = [];
        this.clsid = 1;
        this.clslist = [];
    }
    DropoutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.dataService.getClassList()
            .subscribe(function (items) {
            _this.clslist = items;
            _this.onClassChange();
        }, function (error) { return console.log(error); });
    };
    DropoutPage.prototype.onClassChange = function () {
        var _this = this;
        this.dataService.getClassWiseStudent(this.clsid)
            .subscribe(function (items) {
            _this.studentlist = items;
        }, function (error) { return console.log(error); });
    };
    DropoutPage.prototype.getFeeSummary = function () {
        var _this = this;
        this.dataService.getFeeSummary(this.ssid)
            .subscribe(function (fsummary) {
            //this.feeSummary = fsummary;
            console.log(fsummary);
            _this.amount = fsummary.prevdues + (fsummary.curtotal - (fsummary.curpmt + fsummary.curdsc));
        }, function (error) { return console.log(error); });
    };
    DropoutPage.prototype.validateData = function () {
        if (this.ssid && this.amount)
            this.showConfirm();
        else
            this.showAlert();
    };
    DropoutPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure the student has left the school',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.saveItem();
                    }
                }
            ]
        });
        confirm.present();
    };
    DropoutPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Please select the class & studen both',
            buttons: ['OK']
        });
        alert.present();
    };
    DropoutPage.prototype.saveItem = function () {
        var newItem = {
            ssid: this.ssid,
            amount: this.amount
        };
        this.view.dismiss(newItem);
    };
    DropoutPage.prototype.close = function () {
        this.view.dismiss();
    };
    DropoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dropout',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\dropout\dropout.html"*/'<ion-header>\n  <ion-toolbar color="secondary">\n    <ion-title>\n      Student Dropout\n    </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Class</ion-label>\n      <ion-select [(ngModel)]="clsid" (ionChange)="onClassChange()">\n        <ion-option *ngFor="let cl of clslist" [value]="cl.clsid">{{cl.clsname}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Student</ion-label>\n      <ion-select [(ngModel)]="ssid" (ionChange)="getFeeSummary()">\n        <ion-option *ngFor="let student of studentlist" [value]="student.ssid">{{student.fullname}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      Total Outstanding     :- Rs. {{amount}}\n    </ion-item>\n\n  </ion-list>\n\n  <button full ion-button color="secondary" (click)="validateData()">Submit</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\dropout\dropout.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _e || Object])
    ], DropoutPage);
    return DropoutPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=dropout.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_report__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ssummary_ssummary__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__report_report__["a" /* ReportPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__ssummary_ssummary__["a" /* SsummaryPage */];
        // Set the active tab based on the passed index from menu.ts
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\tabs\tabs.html"*/'<!--\n\n  Generated template for the TabsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-tabs [selectedIndex]="myIndex">\n\n  <ion-tab [root]="tab1Root" tabTitle="Fee Summary" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Student Summary" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_item_add_item__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_item_detail_item_detail__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_collection_collection__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_adjustment_adjustment__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dropout_dropout__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_report_report__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_ssummary_ssummary__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_data_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_adjustment_adjustment__["a" /* AdjustmentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dropout_dropout__["a" /* DropoutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ssummary_ssummary__["a" /* SsummaryPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ssummary/ssummary.module#SsummaryPageModule', name: 'SsummaryPage', segment: 'ssummary', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_adjustment_adjustment__["a" /* AdjustmentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_dropout_dropout__["a" /* DropoutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_report__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_ssummary_ssummary__["a" /* SsummaryPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__services_data_service__["a" /* DataService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = (function () {
    function ReportPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.feeSummaryClassWise = [];
        this.feeSummaryMonthWise = [];
        this.rtype = 'class';
        this.monthlist = [];
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        this.getClassWiseData();
        this.monthlist = this.dataService.getMonthList();
    };
    ReportPage.prototype.onTypeChange = function () {
        if (this.rtype == 'class')
            this.getClassWiseData();
        else
            this.getMonthWiseData();
    };
    ReportPage.prototype.getClassWiseData = function () {
        var _this = this;
        this.dataService.getFeeSummaryReport('class')
            .subscribe(function (items) {
            _this.feeSummaryClassWise = items;
        }, function (error) { return console.log(error); });
    };
    ReportPage.prototype.getMonthWiseData = function () {
        var _this = this;
        this.dataService.getFeeSummaryReport('month')
            .subscribe(function (items) {
            _this.feeSummaryMonthWise = items;
        }, function (error) { return console.log(error); });
    };
    ReportPage.prototype.getSum = function (column) {
        var sum = 0;
        var objArray = [];
        if (this.rtype == 'class')
            objArray = this.feeSummaryClassWise;
        else
            objArray = this.feeSummaryMonthWise;
        for (var i = 0; i < objArray.length; i++) {
            sum += objArray[i][column];
        }
        return sum;
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"C:\Dhiraj\Project\sas-mapp\src\pages\report\report.html"*/'<!--\n\n  Generated template for the ReportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="secondary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Fee Summary\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n  <ion-item>\n\n    <ion-label>Select Report Type</ion-label>\n\n    <ion-select [(ngModel)]="rtype" (ionChange)="onTypeChange()">\n\n      <ion-option value="class">Class Wise</ion-option>\n\n      <ion-option value="month">Month Wise</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n<!-- Class wise fee summary -->\n\n\n\n<ion-grid *ngIf="rtype == \'class\'">\n\n  <ion-row class="row header">\n\n    <ion-col class="col col-2">\n\n      Class\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Prev Dues\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Cur Fee\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Cur Pmt\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Disc\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Tot Bal\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="row" *ngFor="let fs of feeSummaryClassWise">\n\n    <ion-col class="col col-2">\n\n      {{fs.clsname}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{fs.prevdue}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{fs.curfee}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{fs.curpmt}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{fs.curdsc}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{fs.totalbal}}\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="row footer">\n\n    <ion-col class="col col-2">\n\n      Total\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ getSum(\'prevdue\') }}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ getSum(\'curfee\') }}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ getSum(\'curpmt\') }}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ getSum(\'curdsc\') }}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ getSum(\'totalbal\') }}\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n<!-- Month wise fee summary -->\n\n\n\n<ion-grid *ngIf="rtype == \'month\'">\n\n  <ion-row class="row header">\n\n    <ion-col class="col col-2">\n\n      Month\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Fee\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Pmt\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Disc\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Drop\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      Tot Bal\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="row" *ngFor="let fs of feeSummaryMonthWise">\n\n    <ion-col class="col col-2">\n\n      {{monthlist[fs.month-1]}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{fs.feeamt}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{fs.pmtamt}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{fs.dsamt}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{fs.doamt}}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{fs.totbal}}\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="row footer">\n\n    <ion-col class="col col-2">\n\n      Total\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ getSum(\'feeamt\') }}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ getSum(\'pmtamt\') }}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ getSum(\'dsamt\') }}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ getSum(\'doamt\') }}\n\n    </ion-col>\n\n    <ion-col class="col">\n\n      {{ getSum(\'totbal\') }}\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Dhiraj\Project\sas-mapp\src\pages\report\report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ })

},[354]);
//# sourceMappingURL=main.js.map