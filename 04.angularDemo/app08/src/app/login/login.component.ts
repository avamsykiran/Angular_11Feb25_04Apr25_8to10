import { Component, inject } from '@angular/core';
import { AuthStore } from '../services/auth.store';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  store = inject(AuthStore);

  loginForm: FormGroup;
  userNameFC:FormControl;
  passwordFC:FormControl;

  constructor(private router:Router){

    this.userNameFC = new FormControl("",[Validators.required]);
    this.passwordFC = new FormControl("",[Validators.required]);

    this.loginForm = new FormGroup({
      username:this.userNameFC,
      password:this.passwordFC
    });
  }

  formSubmitted(){
    this.store.login(this.loginForm.value);
    if(this.store.isAuthenticated()){
      this.router.navigateByUrl("/");
    }
  }

}
