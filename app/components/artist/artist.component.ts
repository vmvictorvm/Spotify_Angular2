import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'my-artist',
  templateUrl: 'artist.component.html',
})
export class ArtistComponent  { 

  //Inject the spotify service into the constructor.
  constructor(private _spotifyService:SpotifyService) {

  }

 }
