import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownModule } from 'primeng/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthorizationService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { config } from 'src/config';

let config2 = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(config.CLIENT_ID)
  }
]);

export function provideConfig() {
  return config2;
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
