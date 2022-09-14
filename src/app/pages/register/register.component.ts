import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public allow: boolean = true;
  public personForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.personForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  ngOnInit(): void {
  }

  onCreate() {
    if (this.personForm.value.password.length > 5) {
      this.authService.createUser({
        email: this.personForm.value.email,
        password: this.personForm.value.password,
        returnSecureToken: true
      }).subscribe(res => {
        console.log('CREATE USER: ', res);
      })
      this.router.navigate(['/login'])
    } else {
      this.allow = false;
    }

  }
}
