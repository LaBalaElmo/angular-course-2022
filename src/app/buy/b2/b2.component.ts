import { Component, OnInit } from '@angular/core';
import {SingletonService} from "../../singleton.service";

@Component({
  selector: 'app-b2',
  templateUrl: './b2.component.html',
  styleUrls: ['./b2.component.scss']
})
export class B2Component implements OnInit {
  token: string = '';

  constructor(private singletonService: SingletonService) { }

  ngOnInit(): void {
  }

  async getToken() {
    this.token =  this.singletonService.getToken()
  }

}
