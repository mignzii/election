import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {
  identifiant:any
  public url='https://electionageis.herokuapp.com/mail'
  constructor(private http:HttpClient) { }

 postuser():Observable<any>{
  return this.http.post(this.url,this.identifiant)
 }
}
