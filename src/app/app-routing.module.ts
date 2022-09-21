import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomeComponent }  from './welcome/welcome.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HeaderComponent } from './header/header.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersondetailssViewComponent } from './persondetailss-view/persondetailss-view.component';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';


const routes: Routes = [
  { path: 'App', component: AppComponent },
  { path: 'loginpage', component: LoginpageComponent },
  
  {path:'welcome',component:WelcomeComponent},
  {path: '',   redirectTo: '/welcome', pathMatch: 'full'},
  {path:'signuppage',component:SignupPageComponent},
  {path:'profilepage',component:ProfilepageComponent},
  {path:'header',component:HeaderComponent},
  {path:'person-details',component: PersonDetailsComponent},
  {path:'persondetails-view',component:PersondetailssViewComponent},
  {path:'profile-dropdown',component:ProfileDropdownComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AppComponent,LoginpageComponent]
