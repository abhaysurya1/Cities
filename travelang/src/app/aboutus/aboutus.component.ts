
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',  // Path to the About Us HTML template
  styleUrls: ['./aboutus.component.css']    // Path to the About Us CSS styles
})
export class AboutUsComponent {
  title = 'ABOUT US';
  description = 'Learn more about our company and our values.';
contactDescription: any;
contactTitle: any;
}
