import { Injectable } from '@angular/core';
import { ConferenceModel } from '../../shared/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  public conference: ConferenceModel;
  public conferencesList: ConferenceModel[];
  public tezis: {};

  public conference$ = new BehaviorSubject<ConferenceModel>(this.conference);
  public conferencesList$ = new BehaviorSubject<ConferenceModel[]>(this.conferencesList);
  public tezis$ = new BehaviorSubject<any>(this.tezis);

  constructor() { }

  setConference(conference) {
    this.conference$.next(conference);
  }

  setConferences(conferences) {
    this.conferencesList$.next(conferences);
  }

  setTezis(tezis) {
    this.tezis$.next(tezis);
  }
}
