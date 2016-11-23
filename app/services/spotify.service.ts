import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    constructor(private _http:Http) {

    }

    //Search artist with user input 'str'.
    searchArtist(str:string) {
        return this._http.get('https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=artist&market=US')
                         .map(res => res.json());
    }
}

