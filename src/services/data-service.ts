import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  //api_endpoint = 'https://sas-dsapi-prod.herokuapp.com/';
  //api_endpoint = 'http://localhost:3000/';
  api_endpoint = '/';

  //monthlist = {"Apr":1, "May":2, "Jun":3, "Jul":4, "Aug":5, "Sep":6, "Oct":7, "Nov":8, "Dec":9, "Jan":10, "Feb":11, "Mar":12};
  monthlist = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  constructor(private http: Http) {}

  addItem(query) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post(this.api_endpoint + 'api/student',
      query,
      {headers: headers});
  }

  getItems() {
    console.log('calling getItems API');
    return this.http.get(this.api_endpoint + 'api/student')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  deleteItem(id){
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.delete(this.api_endpoint + 'api/student/' + id,
            {headers: headers});
  }

  addStudent(data) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post(this.api_endpoint + 'api/student',
      data,
      {headers: headers});
  }

  getClassList() {
    return this.http.get(this.api_endpoint + 'api/class')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getClassWiseStudent(id) {
    console.log('calling getItems API');
    return this.http.get(this.api_endpoint + 'api/student/class/' + id)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getFeeHead(id) {
    return this.http.get(this.api_endpoint + 'api/class/feehead/' + id)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getDistanceChoice() {
    return this.http.get(this.api_endpoint + 'api/transportfee')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getFeeSummary(ssid) {
    return this.http.get(this.api_endpoint + 'api/fee/dues/' + ssid)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getFeeSummaryReport() {
    return this.http.get(this.api_endpoint + 'api/fee/summary')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getStudentSummary() {
    return this.http.get(this.api_endpoint + 'api/student/summary')
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  addCollection(data) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post(this.api_endpoint + 'api/fee/collection',
      data,
      {headers: headers});
  }

  addAdjustment(data) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post(this.api_endpoint + 'api/fee/adjustment',
      data,
      {headers: headers});
  }

  paymentPosting() {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.post(this.api_endpoint + 'api/fee/paymentposting',
      {},
      {headers: headers});
  }

  getMonthList() {
    return this.monthlist;
  }
}
