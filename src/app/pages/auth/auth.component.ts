import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  title = 'test';

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    /*if(this.authService.verifyLogged()){
      this.router.navigate(['home'])
    }*/
  }

  onLogin(login: any) {
    if (login.valid) {
      this.authService.login({
        email: login.value.username,
        password: login.value.password,
        returnSecureToken: true
      }).subscribe(res => {
        console.log('RESPONSE: ', res)
        this.router.navigate(['home'])
      })
    }
  }
}
