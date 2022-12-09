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
 annulervote(){
  this.actifbouton=false
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
