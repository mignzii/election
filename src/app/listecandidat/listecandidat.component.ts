import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { CandidatService } from '../service/candidat.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listecandidat',
  templateUrl: './listecandidat.component.html',
  styleUrls: ['./listecandidat.component.css']
})
export class ListecandidatComponent implements OnInit {
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
  constructor(private candidat:CandidatService) { }
  actifbouton=false
  actifboutonorga=false
  actifprE=false
  vp=false
  pdbout=false
  sgboutton=false
  sagboutton=false
  cultboutton=false
  tresorbu=false
  chargement=false
  ngOnInit(): void {
    this.candidat.getallcandidat().subscribe(data=>{
      console.log(data)
      this.resultatglobal=data
      this.chargement=true
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
      this.resultatSAG=this.resultatglobal.filter((ele:any)=>{
        return ele.poste=="SAG"
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
    console.log(sessionStorage.getItem('mailuser'))

  }
  voter(id:any){
    this.actifbouton=true
    sessionStorage.setItem('idchoisi',id)
    console.log("President choisi "+""+ sessionStorage.getItem('idchoisi'))
  }
  public d:any
  voterorga(id:any){
    this.actifboutonorga=true
    sessionStorage.setItem('idchoisiorga',id)
    this.d=sessionStorage.getItem('idchoisiorga')
    console.log("President orga choisi "+ ""+sessionStorage.getItem('idchoisiorga'))

  }
  public a:any
  public b:any
  public c:any

  voterPRE(id:any){
    this.actifprE=true
    sessionStorage.setItem('PREchoisi',id)
    this.a=sessionStorage.getItem('PREchoisi'),
    console.log("Relation exterireur choisi "+ ""+sessionStorage.getItem('PREchoisi'))

  }
  voterVP(id:any){
    this.vp=true
    sessionStorage.setItem('Vpchoisi',id)
    this.b=sessionStorage.getItem('Vpchoisi')
    console.log("Vp choisi "+ ""+sessionStorage.getItem('Vpchoisi'))

  }
  voterpeda(id:any){
    this.pdbout=true
    sessionStorage.setItem('pedachoisi',id)
    this.c=sessionStorage.getItem('pedachoisi')
    console.log("President Peda choisi "+ ""+sessionStorage.getItem('pedachoisi'))

  }
  public e:any
  voterSG(id:any){
    this.sgboutton=true
    sessionStorage.setItem('SGchosi',id)
    this.e=sessionStorage.getItem('SGchosi')
    console.log("Secretaire  choisi "+ ""+sessionStorage.getItem('SGchosi'))
  }
  public t:any
  voterSAG(id:any){
    this.sagboutton=true
    sessionStorage.setItem('SAGchosi',id)
    this.t=sessionStorage.getItem('SAGchosi')
    console.log("Secretaire  Adjoint choisi "+ ""+sessionStorage.getItem('SAGchosi'))

  }

  public f:any
  votercult(id:any){
    this.sgboutton=true
    sessionStorage.setItem('Pculturelchosi',id)
    this.f=sessionStorage.getItem('Pculturelchosi')
    console.log("President culturel choisi "+ ""+sessionStorage.getItem('Pculturelchosi'))

  }
  public g:any
  votertresor(id:any){
    this.tresorbu=true
    sessionStorage.setItem('tresorier',id)
    this.g=sessionStorage.getItem('tresorier')
    console.log("Tresorier choisi "+ ""+sessionStorage.getItem('tresorier'))

  }
  resumebutton(){
    Swal.fire({
      title: '<strong> <u>Resumé</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, '+
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
  }
  validerchoix(){
    this.candidat.choixutilisateur={
      choixpresi:sessionStorage.getItem('idchoisi'),
      choixpresiorga:sessionStorage.getItem('idchoisiorga'),
      REX:sessionStorage.getItem('PREchoisi'),
      Peda:sessionStorage.getItem('pedachoisi'),
      SG:sessionStorage.getItem('SGchosi'),
      VP:sessionStorage.getItem('Vpchoisi'),
      CULTUREL:sessionStorage.getItem('Pculturelchosi'),
      Treso:sessionStorage.getItem('tresorier'),
      SAG:sessionStorage.getItem('SAGchosi'),
      emailelecteur:sessionStorage.getItem('mailuser')
    }
    this.candidat.posterchoix().subscribe(data=>{
      console.log(data)
      Swal.fire({
        title: data.message,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        footer: '<a href="/login">Login</a>'
      })
    })
  }

}
