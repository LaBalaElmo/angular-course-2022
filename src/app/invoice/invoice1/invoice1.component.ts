import { Component, OnInit } from '@angular/core';
import {SingletonService} from "../../singleton.service";

@Component({
  selector: 'app-invoice1',
  templateUrl: './invoice1.component.html',
  styleUrls: ['./invoice1.component.scss']
})
export class Invoice1Component implements OnInit {
  message: string = '';

  constructor(private singletonService: SingletonService) { }

  ngOnInit(): void {
  }

  getMessage(){
    this.message = this.singletonService.getMessage()
    console.log(this.singletonService.getMessage())
  }

}
