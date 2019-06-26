import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  countryList: Country[] = [
    { countryName: 'India', countryId: 100, nationalFlag: "https://flaglane.com/download/indian-flag/indian-flag-graphic.png"},
    { countryName: 'South Africa', countryId: 200, nationalFlag: "https://flaglane.com/download/south-african-flag/south-african-flag-graphic.png"},
    { countryName: 'The Netherlands', countryId: 300, nationalFlag: "https://flaglane.com/download/dutch-flag/dutch-flag-graphic.png"},
    { countryName: 'Germany', countryId: 400, nationalFlag: "https://flaglane.com/download/german-flag/german-flag-graphic.png"},
    { countryName: 'England', countryId: 500, nationalFlag: "https://flaglane.com/download/english-flag/english-flag-graphic.png"}
  ];

  @Output() selectedCountryEvent = new EventEmitter<Country>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(index: number) {

    this.selectedCountryEvent.emit(this.countryList[index]);
  }

}
