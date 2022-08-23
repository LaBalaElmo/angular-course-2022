import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  constructor() {
    console.log('-----------------PURE')
    console.log(this.pureExample(3, 5))
    console.log(this.pureExample(1, 5))
    console.log(this.pureExample(3, 4))
    console.log(this.pureExample(2, 1))

    console.log('-----------------IMPURE')
    console.log(this.impureExample(3, 5))
    console.log(this.impureExample(1, 5))
    console.log(this.impureExample(3, 4))
    console.log(this.impureExample(2, 1))
  }

  pureExample(a: number, b: number): number{
    return a + b;
  }

  impureExample(a: number, b: number): number{
    return a + b + (Math.floor(Math.random() * 10))
  }
}
