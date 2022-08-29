import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  name = 'asdsadasd'
  constructor() { }

  getName() {
    return 'RICARDO';
  }

  setName(name: string){
    this.name = name;
  }
}
