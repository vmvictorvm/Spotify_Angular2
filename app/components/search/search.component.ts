import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';

@Component({
  moduleId: module.id,
  selector: 'my-search',
  templateUrl: 'search.component.html',
})
export class SearchComponent  { 
  searchStr:string;
  searchResArtists: Artist[];

  //Inject the spotify service into the constructor.
  constructor(private _spotifyService:SpotifyService) {

  }

  searchArtist() {
      //console.log(this.searchStr);
      this._spotifyService.searchArtist(this.searchStr).subscribe(res => {
          this.searchResArtists = res.artists.items;
        //console.log(res);
      });
  }
 }
