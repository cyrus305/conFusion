import {Injectable} from '@angular/core';
import {Dish} from "../shared/dish";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Http} from "@angular/http";
import {baseURL} from "../shared/baseUrl";
import 'rxjs/add/operator/map'

@Injectable()
export class DishService {

  constructor(private http: Http) {
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes')
      .map(res => {
        return res.json();
      });
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get(baseURL + 'dishes/' + id)
      .map(res => {
        return res.json();
      });
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
      .map(res => { return res.json()[0]; });

  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => {
        return dishes.map(dish => dish.id);
      });
  }

}
