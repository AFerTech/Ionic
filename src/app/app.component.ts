import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<Componente[]>;

ngOnInit() {
  this.componentes=this.dataService.getMenuOps();
}

  constructor(
    private dataService: DataService
  
  ) {
    }
  }

