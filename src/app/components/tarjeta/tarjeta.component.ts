import {Component, Input, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  verArtista(item: any) {
    let artistId;
    if( item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId])
  }
}
