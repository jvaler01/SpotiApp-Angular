import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newRealeases: any[] = [];
  loading: boolean;
  error: boolean;
  mensaje: string;

  constructor( private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.newRealeases = data;
      this.loading = false;
    }, ( error ) =>{
      this.error = true;
      this.loading = false;
      this.mensaje = error.error.error.message;
    });
  }

  ngOnInit() {
  }

}
