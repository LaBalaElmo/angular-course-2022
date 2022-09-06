import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private url: string = environment.app.apiUrlBase;

  constructor(
    private http: HttpClient
  ) {
  }

  public getAllCars(): Observable<any> {
    return this.http.get(
      `${this.url}/cars.json`)
  }

  public updateEnable(id: any, body: any): Observable<any> {
    return this.http.put(`${this.url}/cars/${id}.json`, body)
  }

  public patchCar(id: any, body: any): Observable<any> {
    return this.http.patch(`${this.url}/cars/${id}.json`, body)
  }
}
