import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountrylistComponent } from './components/countrylist/countrylist.component';
import { CountrydetailComponent } from './components/countrydetail/countrydetail.component';
import { CountryService } from './services/country.service';

@NgModule({
  declarations: [
    AppComponent,
    CountrylistComponent,
    CountrydetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
