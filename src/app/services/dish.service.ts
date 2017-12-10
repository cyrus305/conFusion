import { Injectable } from '@angular/core';
import {Dish} from "../shared/dish";
import {DISHES} from "../../assets/resources/dishes";

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

}
