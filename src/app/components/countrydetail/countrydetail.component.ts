import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/services/country.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit, OnDestroy {
  

  selectedCountry: Country = null;
  subscription: Subscription;

  constructor(private countryService: CountryService) { }

  ngOnInit() {

    this.subscription = this.countryService.countrySelectedSubject.subscribe((index) => {
      this.selectedCountry = this.countryService.getCountries()[index]
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
