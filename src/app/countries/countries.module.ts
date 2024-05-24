import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesService } from './services/countries.service';
import { CardComponent } from './components/card/card.component';
import { DetailCountryComponent } from './components/detail-country/detail-country.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PopulationPipe } from './pipe/population.pipe';
import { CheckedValuePipe } from './pipe/checked-value.pipe';
import { IndependentPipe } from './pipe/independent.pipe';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    CardComponent,
    DetailCountryComponent,
    PopulationPipe,
    CheckedValuePipe,
    IndependentPipe,
    StatisticsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], 
  exports:[
    NavbarComponent,
    FooterComponent,
    HomeComponent, 
    CardComponent,
    DetailCountryComponent,
    CountriesRoutingModule
  ],
  providers:[CountriesService]
})
export class CountriesModule { }
