import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  countries: any = []
  temp_countries: any = []
  input_country:string ='';
  region = [
    {
      name: "America",
      region: "americas",
      bgColor: "#41B06E"
    },
    {
      name: "Europe",
      region: "europe",
      bgColor: "#008DDA"
    },
    {
      name: "Africa",
      region: "africa",
      bgColor: "#211C6A"
    },
    {
      name: "Asia",
      region: "asia",
      bgColor : "#FF9800"
    },
    {
      name: "Oceania",
      region: "oceania",
      bgColor: "#8B93FF"
    }
  ]
  count!:number;

  isLoading:boolean = false;

  constructor(private countriesService: CountriesService){}

  ngOnInit(){
    this.getAllCountries();
  }

  ngDoCheck(){
    this.count = this.countries.length;
  }

  getAllCountries(){
    this.isLoading = true;
    this.countriesService.getAllCountries().subscribe({
      next: data =>{
        this.countries = data as any[];
        this.temp_countries = data as any[];
        // console.log(data)
        this.isLoading= false;
      },
      error: err => {
        this.isLoading= false;
        console.log(err)
      }
    })
  }

  getAllCountriesByIndependent(status:string){
    this.isLoading = true;
    this.countriesService.getAllCountriesByIndependent(status).subscribe({
      next: data =>{
        this.countries = data as any[];
        this.isLoading= false;
      },
      error: err =>{
        this.isLoading= false;
        console.log(err)
      } 
    })
  }


  getCountriesByName(name:string){
    this.isLoading = true;
    this.countriesService.getCountriesByName(name).subscribe({
      next: data => {
        this.countries = data,
        this.isLoading= false;
      }, 
      error: err => {
        alert("Data Not Found")
        this.input_country= '';
        this.isLoading= false;
      }
    })
  }

  onClickIndependent(){
    this.getAllCountriesByIndependent("true")
  }

  onClickNotIndependent(){
    this.getAllCountriesByIndependent("false")
  }

  onClickAll(){
    this.countries = this.temp_countries;
  }

  onClickSearch(){
    if(this.input_country == ""){
      this.countries = this.temp_countries;
      return
    }
    this.getCountriesByName(this.input_country);
  }

  onClickRegion(region:string){
    this.isLoading = true;
    this.countriesService.getCountriesByRegion(region).subscribe({
      next: data => {
        this.countries = data;
        this.isLoading= false;
      },
      error : err => {
        this.isLoading= false;
        console.log(err)
      }
    })
  }

}
