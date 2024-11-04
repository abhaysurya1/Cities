import { Routes } from '@angular/router';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contact/contact.component';
import { CitiesComponent } from './cities/cities.component';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CitiesDetailComponent } from './cities/cities-detail/cities-detail.component'

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'city-detail/:id', component: CitiesDetailComponent }, // Add this line for city details
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
