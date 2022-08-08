import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  constructor() {
    //operator Splice
    const A = ['a', 'b', 'c', 'd', 'e',];
    const auxSplice = A.splice(1, 1)
    console.log('auxSplice: ', A, auxSplice);

    //Operator Reduce
    const auxReduce = [1, 2, 3, 4, 5].reduce((prev, value, index) => prev + value, 0)
    console.log('auxReduce: ', auxReduce)

    //JSON Operators
    const auxJSON = {
      id: 1,
      name: 'JUAN',
      lastName : 'GUTIERREZ'
    };

    //ENTRIES, KEY, VALUES

    const  auxEntries = Object.entries(auxJSON);
    console.log('auxEntries: ', auxEntries);

    const auxKeys = Object.keys(auxJSON);
    console.log('auxKeys: ', auxKeys);

    const auxValues = Object.values(auxJSON);
    console.log('auxValues: ', auxValues)

    const a = 1;
    console.log('CONST', a);

    for(let i = 1; i <= 5; i++){
      //console.log('INDEX', i);
    }
    for(let i = 1; i <= 5; i++){
      //console.log('INDEX', i);
    }
    for(let i = 1; i <= 5; i++){
      console.log('INDEX', i);
    }

    const b = [1,2,3,4,5,6]
    const c = [...b, 7, 8, 9]
    console.log('SPREAD: ', c)

    //REST OPERATOR
    this.getREST(1, 2, 'hola');

    const person = {
      id: 1,
      name: 'JUAN',
      country: {
        idCountry: 1,
        cod: 'LP'
      }
    }
    const {country} = person;
    console.log('country: ', country);

  }

  getREST(...params: any[]){
    console.log('REST: ', params);
  }
}
