import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../service/candidat.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private candidat:CandidatService) { }
  public resultatglobal:any
  public resultatpresident:any=[]
  public resultatorga:any=[]
  public resultatvicepre:any=[]
  public resultatpcp:any=[]
  public resultatpco:any=[]
  public resultatSG:any=[]
  public resultatSAG:any=[]
  public resultatPCSC:any=[]
  public resultatTresorie:any=[]
  public allvotant:any=[]
  ngOnInit(): void {
    this.candidat.getallvotant().subscribe(data=>{
      this.allvotant=data
      console.log(this.allvotant)
    })
    this.candidat.getallcandidat().subscribe(data=>{
      console.log(data)
      this.resultatglobal=data
      this.resultatpresident=this.resultatglobal.filter((element:any)=>{
        return element.poste=="President"
      })
      
      console.log(this.resultatpresident)
      console.log(this.resultatorga)
    })

  }

}
