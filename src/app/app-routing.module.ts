import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ListecandidatComponent } from './listecandidat/listecandidat.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  {path:'' , component:LoginpageComponent },
  {path:'login' , component:LoginpageComponent },
  {path:'listecandidat' , component:ListecandidatComponent },
  {path:'admin' , component:AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
