import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor( private activatedRoute: ActivatedRoute,
               private spotify: SpotifyService ) {
    this.loading = true;
    this.activatedRoute.params.subscribe( params => {
      this.getArtista( params['id']);
      this.getTopTracks( params['id']);
    });
  }

  ngOnInit() {
  }

  getArtista( id: string ) {
    this.spotify.getArtist(id).subscribe( artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks(id).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
      this.loading = false;
    });
  }

}
