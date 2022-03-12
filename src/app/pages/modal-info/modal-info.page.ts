import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  // leer las propiedades de un componente
  @Input() nombre: string;
  @Input() pais: string;
  constructor(private ModalController: ModalController) { }

  ngOnInit() {
  }

  salirSinArg(){
    this.ModalController.dismiss();
  }
  salirConArg(){
    this.ModalController.dismiss({
      nombre:'Fernando',
      pais:'México'
    });
  }

}
