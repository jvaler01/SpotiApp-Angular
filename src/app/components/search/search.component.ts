import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino) {
    this.loading = true;
    console.log(termino);
    this.spotify.getArtists(termino).subscribe( (data: any) => {
      this.artists = data;
      console.log(this.artists);
      this.loading = false;
    });
  }
}
