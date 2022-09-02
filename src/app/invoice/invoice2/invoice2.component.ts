import { Component, OnInit } from '@angular/core';
import {SingletonService} from "../../singleton.service";

@Component({
  selector: 'app-invoice2',
  templateUrl: './invoice2.component.html',
  styleUrls: ['./invoice2.component.scss']
})
export class Invoice2Component implements OnInit {
  message: string = '';

  constructor(private singletonService: SingletonService) { }

  ngOnInit(): void {
  }

  getMessage(){
    this.message = this.singletonService.getMessage()
    console.log(this.singletonService.getMessage())
  }

}
