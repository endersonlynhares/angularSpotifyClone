import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private spotifyService: SpotifyService,
    private route: Router
  ) {

  }

  ngOnInit(): void {
    this.verifyValidToken()
  }

  verifyValidToken() {
    const token = this.spotifyService.getToken()
    if(!!token){
      this.spotifyService.defineAccessToken(token)
    }
  }

  open(){
    window.location.href = this.spotifyService.getLoginUrl()
  }

}
