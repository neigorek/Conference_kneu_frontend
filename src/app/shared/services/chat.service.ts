import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient) { }


  postComment(commentBody, docId: string): Observable<any> {
    return this.httpClient.post(`/conference/comment/${docId}`, commentBody);
  }
}
