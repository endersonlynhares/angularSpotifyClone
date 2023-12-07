import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  getLoginUrl() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}`
  }

}
