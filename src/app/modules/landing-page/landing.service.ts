import { Injectable } from '@angular/core';
import { ConferenceModel } from '../../shared/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  public conference: ConferenceModel;
  public conferencesList: ConferenceModel[];

  public conference$ = new BehaviorSubject<ConferenceModel>(this.conference);
  public conferencesList$ = new BehaviorSubject<ConferenceModel[]>(this.conferencesList);

  constructor() { }

  setConference(conference) {
    this.conference$.next(conference);
  }

  setConferences(conferences) {
    this.conferencesList$.next(conferences);
  }
}
