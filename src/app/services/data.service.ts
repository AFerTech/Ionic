import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // inyectando el servicio
  constructor( private Http:HttpClient) { }

  getUsuarios(){
    return this.Http.get('https://jsonplaceholder.typicode.com/users');
  }
  getMenuOps(){
    return this.Http.get<Componente[]>('/assets/data/menu-ops.js');
  }
}
