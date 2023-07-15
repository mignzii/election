import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {
  identifiant:any
  public url='https://electionbackend.vercel.app/testmail'
  public url2='https://electionbackend.vercel.app/password'
  constructor(private http:HttpClient) { }

 postuser():Observable<any>{
  return this.http.post(this.url,this.identifiant)
 }
 postuserpassword():Observable<any>{
  return this.http.post(this.url2,this.identifiant)
 }

}
