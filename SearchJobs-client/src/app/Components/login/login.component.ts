import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { NgModel, FormsModule } from '@angular/forms';
import { User } from '../../Models/User';
import { FieldWork } from '../../Models/Job';


import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
// Remove the incorrect import below
// import { NgModel, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: User = {
    userName: '',
    password: '',
    id: 0,
    fieldWorkSearch: FieldWork.ACCOUNTING,
    numCVSent:0
  };
  constructor(private userSvc: UserService,private router :Router) {
    
  }
  hasSpace(str: string): boolean {
    if (this.user.password.includes(' '))
      return true;
    return false;
  }


submitLogin() {
  // this.loginSvc.getUser(this.user.userName, this.user.password)?.subscribe(res => res != null ? localStorage.setItem('user', JSON.stringify(res)) : alert("the user not found"));
  // this.router.navigate(['']);

  
this.userSvc.getUser(this.user.userName, this.user.password)?.subscribe(res => res != null ? (localStorage.setItem('user', JSON.stringify(res)), this.router.navigate([''])) : alert("the user not found"));

}

}
