import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { OnhoverDirective } from './onhover.directive';
import { DateCountPipe } from './date-count.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UserRequestService } from './user-http/user-request.service';
import { ViewProfileRequestService } from './viewProfile-http/view-profile-request.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    NotFoundComponent,
    ProfileComponent,
    OnhoverDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UserRequestService,
    ViewProfileRequestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
