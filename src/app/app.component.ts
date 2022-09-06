import {Component, Input, OnInit} from '@angular/core';
import {RestService} from "./rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'test';
  data: any;
  usados: any[] = []
  nuevos: any[] = []

  totalNuevo: any = {
    USD: 0,
    BS: 0
  }
  totalUsado: any = {
    USD: 0,
    BS: 0
  }

  constructor(
    private restService: RestService
  ) {}

  ngOnInit() {
    this.restService.getAllCars().subscribe(res =>{
      // @ts-ignore
      this.data = Object.entries(res).map(item => ({id: item[0], ...item[1]}))
      this.nuevos = this.data.filter((item: { category: string; }) => item.category === 'sale')
      this.usados = this.data.filter((item: { category: string; }) => item.category === 'rental')
      this.nuevos.forEach(item => {
        if(item.status === 'disable'){
          if(item.category === 'sale'){
            this.totalNuevo[item.moneyType] = this.totalNuevo[item.moneyType] + item.price
          }
          if(item.category === 'rental'){
            this.totalUsado[item.moneyType] = this.totalUsado[item.moneyType] + item.price
          }
        }
      })
    })
  }

  getEvent(event: any){
    console.log(event)
    if(event.category === 'sale'){
      this.totalNuevo[event.moneyType] = this.totalNuevo[event.moneyType] + event.price;
    }
    if(event.category === 'rental'){
      this.totalUsado[event.moneyType] = this.totalUsado[event.moneyType] + event.price;
    }
  }


}
