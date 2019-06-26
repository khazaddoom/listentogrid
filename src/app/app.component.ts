import { Component } from '@angular/core';
import { Country } from './models/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCountry: Country;

  onSelected(country: Country) {
    this.selectedCountry = country;
  }
}
