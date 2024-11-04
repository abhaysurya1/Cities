// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-cities-rating',
//   templateUrl: './cities-rating.component.html',
//   styleUrls: ['./cities-rating.component.css']
// })
// export class CitiesRatingComponent {
//   @Input() rating!: number; 

  
//   getStars(): { filled: boolean, partial: number }[] {
//     const stars = [];
//     const fullStars = Math.floor(this.rating); 
//     const partialStar = this.rating % 1; 

   
//     for (let i = 0; i < fullStars; i++) {
//       stars.push({ filled: true, partial: 0 }); 
//     }

    
//     if (partialStar > 0) {
//       stars.push({ filled: true, partial: partialStar * 100 }); 
//     }

    
//     while (stars.length < 5) {
//       stars.push({ filled: false, partial: 0 }); 
//     }

//     return stars;
//   }

  
//   getTextualRating(): string {
//     return this.rating.toFixed(1); 
//   }
// }


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cities-rating',
  templateUrl: './cities-rating.component.html',
  styleUrls: ['./cities-rating.component.css']
})
export class CitiesRatingComponent {
  @Input() rating: number = 0; 

  
  onStarClick(index: number): void {
    this.rating = index + 1; 
  }


  getStars(): boolean[] {
    return Array(5).fill(false).map((_, i) => i < this.rating);
  }

 
  getTextualRating(): string {
    return this.rating.toFixed(1);
  }
}
