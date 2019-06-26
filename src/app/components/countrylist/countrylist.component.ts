import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  countryList: Country[] = [
    { countryName: 'India', countryId: 100},
    { countryName: 'South Africa', countryId: 200},
    { countryName: 'The Netherlands', countryId: 300},
    { countryName: 'Germany', countryId: 400},
    { countryName: 'England', countryId: 500}
  ];

  @Output() selectedCountryEvent = new EventEmitter<Country>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(index: number) {

    console.log(index)
    this.selectedCountryEvent.emit(this.countryList[index]);
  }

}
