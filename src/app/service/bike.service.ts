import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {Bike} from "../data/Bike"

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application-json'})
};



@Injectable({
  providedIn: 'root'
})
export class BikeService {
url="http://localhost:8080/api/v1/bikes";
  constructor(private http:HttpClient) {}

  getBikes() : Observable<Bike []>{
    return this.http.get<Bike []>(`${this.url}/all`);
  }
  getBike(id:number){
    return this.http.get(`${this.url}`+id);
  }
  createBike(data:Bike) :Observable<Bike>{
    let body=JSON.stringify(data);
    return this.http.post<Bike>(`${this.url}`,body,httpOptions)
  }

}
