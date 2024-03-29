import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  public url='https://electionbackend.vercel.app/participant'
  public url2='https://electionbackend.vercel.app/voter'
  public url3='https://electionbackend.vercel.app/allvotant'
  public url4='https://electionbackend.vercel.app/allelecteur'
  public choixutilisateur:any
  constructor(private http:HttpClient) { }

  getallcandidat():Observable<any>{
    return this.http.get(this.url)
  }
  posterchoix():Observable<any>{
    return this.http.patch(this.url2,this.choixutilisateur)
  }
  getallvotant():Observable<any>{
    return this.http.get(this.url3)
  }
  getallelecteur():Observable<any>{
    return this.http.get(this.url4)
  }
}
