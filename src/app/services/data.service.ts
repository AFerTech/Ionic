import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // inyectando el servicio
  constructor( private Http:HttpClient) { }

  getUsuarios(){
    return this.Http.get('https://jsonplaceholder.typicode.com/users');
  }
  getAlbum(){
    return this.Http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getMenuOps(){
    return this.Http.get<Componente[]>('/assets/data/menu-ops.js');
  }
  getSegment(){
    return this.Http.get<Componente[]>('/assets/data/superheroes.json')
        .pipe(
          delay(1500)
        );
  }
}
