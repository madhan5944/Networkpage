import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HeaderComponent } from './header/header.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersondetailssViewComponent } from './persondetailss-view/persondetailss-view.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    routingComponents,
    WelcomeComponent,
    SignupPageComponent,
    ProfilepageComponent,
    HeaderComponent,
    PersonDetailsComponent,
    PersondetailssViewComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }