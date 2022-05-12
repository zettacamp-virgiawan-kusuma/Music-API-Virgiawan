import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

interface LoginPayload {
  email: string,
  password: string
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = this.initFormGroup();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  initFormGroup() {
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login(){
    console.log(this.loginForm.value);
    // const payload: LoginPayload = this.loginForm.value;
    // this.loginService.login(payload.email, payload.password).subscribe((resp: any) => {
    //   console.log(resp);
    //   if (resp) {
    //     this.router.navigate(['/home']);
    //   }
    // })
  }

  onForgotPassword() {
  }
}
