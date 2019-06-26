import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {

  @Input() selectedCountry: Country ;

  constructor() { }

  ngOnInit() {

    this.selectedCountry = new Country('test', 999);

    console.log(this.selectedCountry);

  }


}
