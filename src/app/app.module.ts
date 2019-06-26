import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountrylistComponent } from './components/countrylist/countrylist.component';
import { CountrydetailComponent } from './components/countrydetail/countrydetail.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrylistComponent,
    CountrydetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
