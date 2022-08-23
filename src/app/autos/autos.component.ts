import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {
  colorBackground: string = '';
  isButtonEnabled: boolean = true;

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
  money!: EventEmitter<any>;

  constructor() { }

  ngOnInit(): void {
  }

  emitMoney(amount: any){
    this.isButtonEnabled = false;
    this.money.emit({amount: amount, type: this.money_type})
  }

}
