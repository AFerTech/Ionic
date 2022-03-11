import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  // inyecyando servicio
  constructor( private dataService: DataService) { }

  ngOnInit() {

    this.usuarios=this.dataService.getUsuarios();
  }



}
