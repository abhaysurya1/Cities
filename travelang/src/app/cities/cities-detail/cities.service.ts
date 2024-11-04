import { Injectable } from "@angular/core";
import { ICity } from "./cities.model";

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private cities: ICity[] = [
    { id: 1, description: 'Paris, France', placesToSee: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral'], rating: 4.8, image: 'assets/images/paris.jpg', type: 'Cultural' },
    { id: 2, description: 'New York, USA', placesToSee: ['Statue of Liberty', 'Central Park', 'Times Square'], rating: 4.7, image: 'assets/images/New York.jpg', type: 'Cultural' },
    { id: 3, description: 'Tokyo, Japan', placesToSee: ['Tokyo Tower', 'Senso-ji Temple', 'Shibuya Crossing'], rating: 4.9, image: 'assets/images/Tokyo.jpg', type: 'Cultural' },
    { id: 4, description: 'London, England', placesToSee: ['Big Ben', 'British Museum', 'Tower Bridge'], rating: 4.6, image: 'assets/images/london.jpg', type: 'Cultural' },
    { id: 5, description: 'Rome, Italy', placesToSee: ['Colosseum', 'Vatican City', 'Trevi Fountain'], rating: 4.7, image: 'assets/images/rome.jpg', type: 'Cultural' },
    { id: 6, description: 'Sydney, Australia', placesToSee: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach'], rating: 4.5, image: 'assets/images/sydney.jpg', type: 'Nature' },
    { id: 7, description: 'Barcelona, Spain', placesToSee: ['Sagrada Familia', 'Park Güell', 'La Rambla'], rating: 4.8, image: 'assets/images/barcelona.jpg', type: 'Cultural' },
    { id: 8, description: 'Bengaluru, India', placesToSee: ['Bangalore Palace', 'Lalbagh Botanical Garden', 'Vidhana Soudha'], rating: 4.7, image: 'assets/images/bengaluru.jpg', type: 'Cultural' },
    { id: 9, description: 'Dubai, UAE', placesToSee: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah'], rating: 4.9, image: 'assets/images/dubai.jpg', type: 'Cultural' },
    { id: 10, description: 'Cairo, Egypt', placesToSee: ['Pyramids of Giza', 'Egyptian Museum', 'Khan El Khalili'], rating: 4.6, image: 'assets/images/cairo.jpg', type: 'Cultural' },
    { id: 11, description: 'Queenstown, New Zealand', placesToSee: ['Milford Sound', 'Skyline Queenstown', 'Shotover River'], rating: 4.8, image: 'assets/images/queen.jpg', type: 'Adventure' },
    { id: 12, description: 'Orlando, USA', placesToSee: ['Walt Disney World', 'Universal Studios', 'SeaWorld'], rating: 4.7, image: 'assets/images/orlando.jpg', type: 'Family' }
  ];

  getCities(): ICity[] {
    return this.cities;
  }

  addCity(city: ICity): void {
    city.id = this.cities.length + 1; // Simple ID generation
    this.cities.push(city);
  }

  updateCity(updatedCity: ICity): void {
    const index = this.cities.findIndex(city => city.id === updatedCity.id);
    if (index !== -1) {
      this.cities[index] = updatedCity;
    }
  }

  deleteCity(cityId: number): void {
    this.cities = this.cities.filter(city => city.id !== cityId);
  }
}
