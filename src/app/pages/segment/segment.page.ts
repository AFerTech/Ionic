import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes: Observable<any>;
  publisher: string='';

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.superHeroes=this.DataService.getSegment();

  }

  segmentChanged(event){
    // console.log(event.detail.value);
    // if(event.detail.value==='todos'){
      // return this.publisher= '';
    // }
    this.publisher= event.detail.value;

  }

}
