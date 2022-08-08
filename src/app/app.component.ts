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


    const data = {
      0: {
        id: 1,
        name: 'juan',
        age: 24
      },
      1: {
        id: 2,
        name: 'maria',
        age: 10
      }
    }

    //Convertir a array y obtener la sume de edades
    const resp = Object.values(data).reduce((prev, value)=> prev + value.age, 0);
    console.log('resp: ', resp);

    //Convertir a un array filtrar las personas mayores a 10, mostrar solo los IDS
    //RESULTADO: [2]

    const resp2 = Object.values(data).filter(element => element.age > 10).map(element => element.id);

    console.log(resp2)

  }


  getREST(...params: any[]){
    console.log('REST: ', params);
  }
}
