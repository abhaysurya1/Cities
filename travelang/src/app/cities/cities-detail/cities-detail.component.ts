import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cities-detail.component.html',
  styleUrls: ['./cities-detail.component.css']
})
export class CitiesDetailComponent {
goBack() {
throw new Error('Method not implemented.');
}
goHome() {
throw new Error('Method not implemented.');
}
  @Input() cityId!: number; 
  @Input() cityDescription!: string; 
  @Input() cityPlacesToSee!: string[]; 
  @Input() cityRating!: number; 


}

