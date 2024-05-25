import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail-country',
  templateUrl: './detail-country.component.html',
  styleUrl: './detail-country.component.scss'
})
export class DetailCountryComponent {
  country:any;
  isLoading = false;

  constructor(private countriesService: CountriesService, private route: ActivatedRoute){
    
  }

  ngOnInit(){
    this.getCountriesByName(this.route.snapshot.params['country']);
    if (typeof window !== "undefined") {
      window.scrollTo(0,0);
    }
  }

  getCountriesByName(name:string){
    this.isLoading = true;
    this.countriesService.getCountriesByDetailName(name).subscribe({
      next: (data:any) => {
        this.country = data[0] as any;
        this.isLoading= false;
      },
      error: err => {
        console.log(err)
        this.isLoading= false;
      }
    })
  }

}
