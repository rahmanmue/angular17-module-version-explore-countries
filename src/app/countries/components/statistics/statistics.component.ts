import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  countries: any = []
  population_countries:any[] = []
  chart:any;
 

  constructor(private countriesService: CountriesService){}

  ngOnInit(){
    this.getAllCountries();
  }

  getAllCountries(){
    this.countriesService.getAllCountries().subscribe({
      next: data =>{
        this.countries = data as any[];
        this.population_countries = data as any[];
        this.population_countries = this.population_countries.sort((a,b)=> b.population - a.population).slice(0,10).map(country => {
          return {
            population: country.population,
            name: country.name.common +" "+ country.flag,
            region: country.region,
            subregion: country.subregion
          }
        });

        this.createChart();
      },
      error: err => console.log(err)
    })
  }

  createChart(){
    this.createChartStatusIndependent();
    this.createChartPopulation();
    this.createChartRegion();
  }

  createChartStatusIndependent(){
    const countryIndependent = this.countries.filter((country : any)=> country.independent == true).length;
    const countryNotIndependent = this.countries.filter((country : any)=> country.independent == false).length;
    const ctx = document.getElementById('independentStatusChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Independent", "Not Independent"],
        datasets: [{
          label: "Independent Status",
          data: [countryIndependent, countryNotIndependent],
          backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'] 
        }]
      }
    });
  }

  createChartPopulation(){
    const names = this.population_countries.map((country)=> country.name);
    const population = this.population_countries.map((country)=> country.population);
    const ctx = document.getElementById('populationChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: "Largest Population",
          data: population,
          backgroundColor: [
            'rgb(255, 99, 132)',    
            'rgb(255, 205, 86)',    
            'rgb(54, 162, 235)',    
            'rgb(75, 192, 192)',    
            'rgb(153, 102, 255)',   
            'rgb(255, 159, 64)',    
            '#FF70AB',     
            '#8576FF',   
            '#41B06E',
            '#704264'  
          ] 
        }]
      }
    });
  }

  createChartRegion(){
    const america = this.countries.filter((c:any)=> c.region == "Americas").length;
    const europe = this.countries.filter((c:any)=> c.region == "Europe").length;
    const asia = this.countries.filter((c:any)=> c.region == "Asia").length;
    const africa = this.countries.filter((c:any)=> c.region == "Africa").length;
    const oceania = this.countries.filter((c:any)=> c.region == "Oceania").length;

    const ctx = document.getElementById('regionChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ["America", "Europe", "Africa", "Asia", "Oceania"],
        datasets: [{
          label: "Region",
          data: [america, europe, africa, asia, oceania],
          backgroundColor: [  
            '#41B06E',     
            '#008DDA',   
            '#211C6A',
            '#FF9800',
            '#8B93FF'  
          ] 
        }]
      }
    });

  }


}
