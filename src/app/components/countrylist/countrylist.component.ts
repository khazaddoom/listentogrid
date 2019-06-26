import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  countryList: Country[];

  // @Output() selectedCountryEvent = new EventEmitter<Country>();

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryList = this.countryService.getCountries();
  }

  onSelect(index: number) {

    //this.selectedCountryEvent.emit(this.countryList[index]);

    this.countryService.countrySelectedSubject.next(index);

  }

}
