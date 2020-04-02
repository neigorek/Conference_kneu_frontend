import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConferenceModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  constructor(
    private httpClientService: HttpClient
  ) { }

  getConferenceList(): Observable<ConferenceModel[]> {
    return this.httpClientService.get<ConferenceModel[]>('http://localhost:3000/conferences');
  }

  registrationOnConference(idConf: string, formBody) {
    return this.httpClientService.post(`/conference/add/${idConf}`, formBody);
  }

  fileUploading(formBody): Observable<any> {
    return this.httpClientService.post(`/upload`, formBody);
  }

}
