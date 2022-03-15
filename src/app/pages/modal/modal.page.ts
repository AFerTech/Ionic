import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async mostrarModal(){
    const modal= await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps:{
        nombre:'Alexis',
        pais:'México'
      }

    });
    await modal.present();

    // const {data}= await modal.onDidDismiss();
    // se dispara en el momento en el que se cierra, mucho antes de iniciar la animación
    const {data}= await modal.onWillDismiss();
    console.log(data);
    console.log(JSON.stringify(data));
  }

}
