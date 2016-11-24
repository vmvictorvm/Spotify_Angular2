import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  moduleId: module.id,
  selector: 'my-album',
  templateUrl: 'album.component.html',
})
export class AlbumComponent implements OnInit { 
  album:Album[];

  //Inject the spotify service into the constructor.
  constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params
        .map(param => param['id'])
        .subscribe(id => {
          this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    })
        })
  }

 }
