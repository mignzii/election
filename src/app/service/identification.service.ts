import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {
  identifiant:any
  public url='http://localhost:6001/testmail'
  public url2='http://localhost:6001/password'
  constructor(private http:HttpClient) { }

 postuser():Observable<any>{
  return this.http.post(this.url,this.identifiant)
 }
 postuserpassword():Observable<any>{
  return this.http.post(this.url2,this.identifiant)
 }
}
