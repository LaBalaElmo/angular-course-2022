import { Component, OnInit } from '@angular/core';
import {SingletonService} from "../../singleton.service";

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {

  token: string = '';

  constructor(private singletonService: SingletonService) { }

  ngOnInit(): void {
  }

  sendToken(){
    this.singletonService.setToken(this.token)
    console.log(this.singletonService.getToken())
  }

}
