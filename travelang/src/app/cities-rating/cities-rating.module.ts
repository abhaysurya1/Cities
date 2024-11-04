import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesRatingComponent } from './cities-rating/cities-rating.component';

@NgModule({
  declarations: [CitiesRatingComponent],
  imports: [CommonModule],
  exports: [CitiesRatingComponent] 
})
export class CitiesRatingModule {}
