import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PopoverComponent } from 'src/app/components/popover/popover.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PopoverComponent
  ],
  exports: [
    HeaderComponent,
    PopoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
