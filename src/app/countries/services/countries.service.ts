import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  BASE_API = environment.apiUrl;


  constructor(private http: HttpClient) { }
  
  getAllCountries(){
    return this.http.get(`${this.BASE_API}/all`)
  }

  getAllCountriesByIndependent(status:string){
    return this.http.get(`${this.BASE_API}/independent?status=${status}`)
  }

  getCountriesByName(name:string){
    return this.http.get(`${this.BASE_API}/name/${name}`)
  }

  getCountriesByDetailName(name:string){
    return this.http.get(`${this.BASE_API}/name/${name}?fullText=true`)
  }

  getCountriesByRegion(region:string){
    return this.http.get(`${this.BASE_API}/region/${region}`)
  }


}
