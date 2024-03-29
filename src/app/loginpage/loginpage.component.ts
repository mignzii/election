import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'
import { IdentificationService } from './../service/identification.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
connecte:boolean=false

  constructor(private route:Router , private identifiante:IdentificationService) { }

  ngOnInit(): void {
  }
  mailadress=new FormControl()
  password=new FormControl()


   Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {

      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  openmodal(){
    this.identifiante.identifiant={
      mail:this.mailadress.value
    }
    this.identifiante.postuser().subscribe(data=>{
      console.log(data)
      if(data){
        this.Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        sessionStorage.setItem('mailuser',this.mailadress.value)
        this.connecte=true
  
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Vous n'êtes pas autorisé à voter",

        })
      }
    })


  }

  connectuser(){
    this.identifiante.identifiant={
      password:this.password.value
    }
    this.identifiante.postuserpassword().subscribe(data=>{
      console.log(data)
      if(data){
        this.Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        sessionStorage.setItem('mailuser',this.mailadress.value)
      setTimeout(()=>{
        this.route.navigateByUrl(`listecandidat`)
      },3500 )
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Votre mot de passe est incorrect",

        })
      }
    })


  }


  }
