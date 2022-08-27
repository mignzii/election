import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  public url='https://electionageis.herokuapp.com/participant'
  public url2='https://electionageis.herokuapp.com/voter'
  public url3='https://electionageis.herokuapp.com/allvotant'
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
}
