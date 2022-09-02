import { Component, OnInit } from '@angular/core';
import {SingletonService} from "../../singleton.service";

@Component({
  selector: 'app-dash1',
  templateUrl: './dash1.component.html',
  styleUrls: ['./dash1.component.scss']
})
export class Dash1Component implements OnInit {

  message: string = '';

  constructor(private singletonService: SingletonService) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.singletonService.setMessage(this.message)
    console.log(this.singletonService.getMessage())
  }

}
