import {Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewChecked, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit{

  @Input() name: string = ''
  constructor() { }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }

}
