import {Injectable} from '@angular/core';
import {Restangular} from "ngx-restangular";
import {Feedback} from "../shared/feedback";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular) {
  }

  submitFeedback(feedBack: Feedback): Observable<Feedback> {
    return this.restangular.all('feedback').post(feedBack);
  }

}
