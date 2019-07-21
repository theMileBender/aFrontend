import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../auth.service';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from 'src/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  options:{};

  constructor(private authService: AuthorizationService, private socialAuthService: AuthService, private http: HttpClient) { }

  ngOnInit() {
  }

  googleLogin() {
    this.authService.login().subscribe((data) => {
      console.log(data);
    });
  }

  public signinWithGoogle () {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
 
    this.socialAuthService.signIn(socialPlatformProvider)
    .then((userData) => {
      console.log(userData)
       //on success
       //this will return user data from google. What you need is a user token which you will send it to the server
       this.sendToRestApiMethod(userData.authToken);
    });
 }

 sendToRestApiMethod(token: string) : void {

  this.http.post(config.OAUTH_URL,
     {
        access_token : token
     }).subscribe( 
       onSuccess => {

       },
       onFail => {

       }
     )
}

}
