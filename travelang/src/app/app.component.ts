// import { Component } from '@angular/core';
// import { RouterLinkActive, RouterOutlet } from '@angular/router';
// import { AboutUsComponent } from "./aboutus/aboutus.component";
// import { ContactComponent } from "./contact/contact.component";
// import { CitiesComponent } from './cities/cities.component';
// import { ErrorComponent } from "./error/error.component";
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, AboutUsComponent, ContactComponent, CitiesComponent, ErrorComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'travelang';
// }


import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]  
})
export class AppComponent {
  title = 'Travel App';
}
