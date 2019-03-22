import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Servicio de spotify listo');
  }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDr9rRtHlPANTIB7OYMQHJ9T832422G0UJ0uZmeFCXsWXUs5bnfcvi0bMFPIZC3_2BYI_EJpg6ZxPJDBwc'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe( map( data => {
      return data['albums'].items;
    }));
  }

  getArtists( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist`).pipe( map( data => {
      return data['artists'].items;
    }));
  }

  getArtist( id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe( map( data => {
      return data['tracks'];
    }));
  }
}
