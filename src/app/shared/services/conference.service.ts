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
    return this.httpClientService.get<ConferenceModel[]>('/conferences');
  }

  registrationOnConference(idConf: string, formBody) {
    return this.httpClientService.post(`/conference/add/${idConf}`, formBody);
  }

  fileUploading(formBody): Observable<any> {
    return this.httpClientService.post(`/upload`, formBody);
  }

  getFileByName(fileName: string): Observable<any> {
    return this.httpClientService.get(`/files/${fileName}`);

  }

}
