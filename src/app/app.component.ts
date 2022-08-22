import {Component, Input} from '@angular/core';
import {data} from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'test';
  data:any;
  usados: any
  nuevos: any

  constructor() {
    this.data = data;
    this.nuevos = Object.values(data.data).filter(item => item.category === 'sale');
    this.usados = Object.values(data.data).filter(item => item.category === 'rental');
    console.log(this.nuevos)
  }



}
