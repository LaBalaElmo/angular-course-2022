import { Component, OnInit } from '@angular/core';
import {SingletonService} from "../../singleton.service";

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  token: string = '';

  constructor(private singletonService: SingletonService) { }

  ngOnInit(): void {
  }

  sendToken(){
    console.log(this.singletonService.getToken())
    this.singletonService.setToken(this.token);
  }

}
