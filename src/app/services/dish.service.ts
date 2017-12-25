import {Injectable} from '@angular/core';
import {Dish} from "../shared/dish";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Http} from "@angular/http";
import {baseURL} from "../shared/baseUrl";
import 'rxjs/add/operator/map'
import {ProcessHttpmsgService} from "./process-httpmsg.service";
import 'rxjs/add/operator/catch';
import {Restangular} from "ngx-restangular";

@Injectable()
export class DishService {

  constructor(private http: Http,
              private restangular: Restangular,
              private processHTTPMsgService: ProcessHttpmsgService) {
  }

  /*
 // using observable and rest
  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes')
      .map(res => {
        return this.processHTTPMsgService.extractData(res);
      })
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseURL + 'dishes/' + id)
      .map(res => {
        return this.processHTTPMsgService.extractData(res);
      })
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
      .map(res => {
        return this.processHTTPMsgService.extractData(res)[0];
      })
      .catch(error => {
        return this.processHTTPMsgService.handleError(error);
      });
  }

  getDishIds(): Observable<any> {
    return this.getDishes()
      .map(dishes => {
        return dishes.map(dish => dish.id)
      }).catch(error => {
        return error;
      });
  }
  */

  getDishes(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    return this.restangular.one('dishes', id).get();
  }

  getFeaturedDish(): Observable<Dish> {
    return this.restangular.all('dishes').getList({featured: true})
      .map(dishes => dishes[0]);
  }

  getDishIds(): Observable<any> {
    return this.getDishes()
      .map(dishes => {
        return dishes.map(dish => dish.id)
      })
      .catch(error => {
        return error;
      });
  }

}
