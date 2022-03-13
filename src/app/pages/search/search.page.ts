import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  album: any[]=[];
  textoBuscar: string="";

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getAlbum().subscribe(album =>{
      
      this.album=album;
    })
  }

  onSearchChange(event){
    // console.log(event);
    this.textoBuscar=event.detail.value;
  }

}
