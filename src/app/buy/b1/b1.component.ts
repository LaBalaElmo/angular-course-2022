import { Component, OnInit } from '@angular/core';
import {SingletonService} from "../../singleton.service";

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.scss']
})
export class B1Component implements OnInit {
  token: string = '';

  constructor(private singletonService: SingletonService) { }

  ngOnInit(): void {
  }

  async getToken() {
    this.token =  this.singletonService.getToken()
  }

}
