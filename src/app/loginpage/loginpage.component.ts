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


  constructor(private route:Router , private identifiante:IdentificationService) { }

  ngOnInit(): void {
  }
  mailadress=new FormControl()

   Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
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
      setTimeout(()=>{
        this.route.navigateByUrl(`listecandidat`)
      },3500 )
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

affichepopu(){

}

}
