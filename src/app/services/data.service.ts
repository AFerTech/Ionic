import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // inyectando el servicio
  constructor( private Http:HttpClient) { }

  getUsuarios(){
    return this.Http.get('https://jsonplaceholder.typicode.com/users');
  }
}
