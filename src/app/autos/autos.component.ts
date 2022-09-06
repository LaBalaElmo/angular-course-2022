import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RestService} from "../rest.service";

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {
  @Input()colorBackground: string = 'white';
  @Input()isButtonEnabled: boolean = true;
  showId: boolean = false;

  @Input()
  id:string = '';

  @Input()
  type:string = '';

  @Input()
  color:string[] = [];

  @Input()
  capacity:number = 0;

  @Input()
  create_date:string = '';

  @Input()
  price: number = 0;

  @Input()
  money_type: string = '';

  @Input()
  category: string = '';

  @Input()
  timeType: string = '';

  @Output()
  money = new EventEmitter();


  constructor(
    private restService: RestService
  ) { }

  ngOnInit(): void {
  }

  emitMoney(){
    this.isButtonEnabled = false;
    this.money.emit({category: this.category, price: this.price, moneyType: this.money_type})
    this.restService.patchCar(this.id, {status: 'disable'}).subscribe()
  }

  buttonColor(color: string){
    this.colorBackground = color;
    this.restService.patchCar(this.id, {currentColor: color}).subscribe()
  }

}
