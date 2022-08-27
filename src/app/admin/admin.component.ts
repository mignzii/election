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
  public resultatPCSC:any=[]
  public resultatTresorie:any=[]

  ngOnInit(): void {
    this.candidat.getallcandidat().subscribe(data=>{
      console.log(data)
      this.resultatglobal=data
      this.resultatpresident=this.resultatglobal.filter((element:any)=>{
        return element.poste=="President"
      })
      this.resultatorga=this.resultatglobal.filter((ele:any)=>{
        return ele.poste=="PRE"
      })
      this.resultatvicepre=this.resultatglobal.filter((ele:any)=>{
        return ele.poste=="VP"
      })
      this.resultatpcp=this.resultatglobal.filter((ele:any)=>{
        return ele.poste=="PCP"
      })
      this.resultatpco=this.resultatglobal.filter((ele:any)=>{
        return ele.poste=="PCO"
      })
      this.resultatSG=this.resultatglobal.filter((ele:any)=>{
        return ele.poste=="SG"
      })
      this.resultatPCSC=this.resultatglobal.filter((ele:any)=>{
        return ele.poste=="PCSC"
      })
      this.resultatTresorie=this.resultatglobal.filter((ele:any)=>{
        return ele.poste=="Tresorier"
      })
      console.log(this.resultatpresident)
      console.log(this.resultatorga)
    })

  }

}
