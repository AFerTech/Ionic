import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number=0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event){
    // console.log(event.detail.value);
    this.porcentaje= event.detail.value/ 100;
    }

}
