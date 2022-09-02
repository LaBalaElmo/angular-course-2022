import { Component, OnInit } from '@angular/core';
import {SingletonService} from "../../singleton.service";

@Component({
  selector: 'app-dash2',
  templateUrl: './dash2.component.html',
  styleUrls: ['./dash2.component.scss']
})
export class Dash2Component implements OnInit {
  message: string = '';

  constructor(private singletonService: SingletonService) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.singletonService.setMessage(this.message)
    console.log(this.singletonService.getMessage())
  }
}
