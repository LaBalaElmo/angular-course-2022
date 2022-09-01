import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private http: HttpClient) {
    this.http.get('http://upb.com/user')
      .subscribe(res => {
      console.log('respuesta', res)
    })

    this.http.post('http://upb.com/user', {name: 'asdd', age: 10})
      .subscribe(res => {
        console.log('respuesta', res)
      })

    this.http.put('http://upb.com/user', {id: 1, name: 'juan', age: 10})
      .subscribe(res => {
        console.log('respuesta', res)
      })

    this.http.patch('http://upb.com/user', {id: 1, name: 'juan'})
      .subscribe(res => {
        console.log(res)
      })

    this.http.delete('http://upb.com/user')
      .subscribe(res => {
        console.log('respuesta', res)
      })
  }
}
