import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyConfiguration } from 'src/environments/environments.prod';
import Spotify from "spotify-web-api-js"

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi!: Spotify.SpotifyWebApiJs

  constructor(
    private route: ActivatedRoute
  ) {
    this.spotifyApi = new Spotify()
  }

  getLoginUrl() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`
    const responseType = `response_type=token&show_dialog=true`

    return authEndpoint + clientId + redirectUrl + scopes+ responseType
  }

  getToken(){
    if(!this.route.snapshot.fragment){
      return ''
    }

    const params = this.route.snapshot.fragment.substring(1).split('&')

    return params[0].split('=')[1]
  }

  defineAccessToken(token: string){
    this.spotifyApi.setAccessToken(token)
    localStorage.setItem('token', token)
  }

}
