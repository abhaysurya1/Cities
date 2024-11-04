// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { CityService } from './cities-detail/cities.service'; // Ensure you import your service
// import { ICity } from './cities-detail/cities.model'; // Ensure you import your model
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-cities',
//   standalone: true,
//   imports: [CommonModule,FormsModule],
//   templateUrl: './cities.component.html',
//   styleUrls: ['./cities.component.css']
// })
// export class CitiesComponent {
//   cities: ICity[] = [];
//   newCity: ICity = { id: 0, description: '', placesToSee: [], rating: 0, image: '', type: '' }; // For adding new cities
//   selectedCity: ICity | null = null;

//   constructor(private cityService: CityService, private router: Router) {
//     this.loadCities();
//   }

//   loadCities(): void {
//     this.cities = this.cityService.getCities();
//   }

//   addCity(): void {
//     this.cityService.addCity({ ...this.newCity }); // Add a new city
//     this.loadCities(); // Refresh the city list
//     this.newCity = { id: 0, description: '', placesToSee: [], rating: 0, image: '', type: '' }; // Reset new city form
//   }

//   updateCity(): void {
//     if (this.selectedCity) {
//       this.cityService.updateCity(this.selectedCity);
//       this.loadCities(); // Refresh the city list
//       this.selectedCity = null; // Clear selection
//     }
//   }

//   deleteCity(cityId: number): void {
//     this.cityService.deleteCity(cityId);
//     this.loadCities(); // Refresh the city list
//   }

//   showCityDetails(cityId: number): void {
//     this.selectedCity = this.cities.find(city => city.id === cityId) || null;
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from './cities-detail/cities.service'; 
import { ICity } from './cities-detail/cities.model'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cities',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl:'./cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
editCity(arg0: number) {
throw new Error('Method not implemented.');
}
toggleImage(arg0: number) {
throw new Error('Method not implemented.');
}
  cities: ICity[] = [];
  newCity: ICity = { id: 0, description: '', placesToSee: [], rating: 1, image: '', type: 'Cultural' };
  selectedCity: ICity | null = null;
  searchTerm: string = '';
  filteredCities: ICity[] = [];

  constructor(private cityService: CityService, private router: Router) {
    this.cities = this.cityService.getCities();
    this.filteredCities = this.cities; 
  }

  addCity() {
    this.cityService.addCity(this.newCity);
    this.resetNewCity();
    this.updateFilteredCities();
  }

  updateCity() {
    if (this.selectedCity) {
      this.cityService.updateCity(this.selectedCity);
      this.selectedCity = null;
      this.updateFilteredCities();
    }
  }

  deleteCity(cityId: number) {
    this.cityService.deleteCity(cityId);
    this.updateFilteredCities();
  }

  showCityDetails(cityId: number) {
    this.selectedCity = this.cities.find(city => city.id === cityId) || null;
  }

  resetNewCity() {
    this.newCity = { id: 0, description: '', placesToSee: [], rating: 1, image: '', type: 'Cultural' };
  }

  getStars(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i < rating ? 1 : 0);
  }

  filterCities() {
    this.filteredCities = this.cities.filter(city =>
      city.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  updateFilteredCities() {
    this.filteredCities = this.cities; 
  }

  setRating(city: ICity, rating: number) {
    city.rating = rating;
  }
}

