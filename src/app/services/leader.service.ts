import {Injectable} from '@angular/core';
import {Leader} from "../shared/leader";
import {LEADERS} from "../../assets/resources/leaders";
import {Observable} from "rxjs/Observable";
import {Restangular} from "ngx-restangular";

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) {
  }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return this.restangular.one('leaders', id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({
      feature: true,
    }).map(leader => leader[0]);
  }

}


