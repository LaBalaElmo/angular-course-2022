import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  data = {id: 1, name: 'maria', lastName: 'perez'}

  @ViewChild('myText', {static: false}) myText!: ElementRef;

  send(data: any){
    console.log('data: ', data.value)
    console.log('MY TEXT IN TS: ', this.myText)
    this.myText.nativeElement.value = 'Cambio desde el ts'
  }
}
