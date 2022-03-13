import { Component, OnInit } from '@angular/core';
import { popoverController } from '@ionic/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  items= Array(10);

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {}

  onClick(valor:number){

    this.popoverController.dismiss();
    item: valor;
  }

}
