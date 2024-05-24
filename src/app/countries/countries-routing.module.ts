import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailCountryComponent } from './components/detail-country/detail-country.component';
import { StatisticsComponent } from './components/statistics/statistics.component';


const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch:'full'
    },
    {
      path:'home',
      title:'Home Page',
      component: HomeComponent,
      // loadChildren: () => import('./components/home/home.component').then(m=>m.HomeComponent)
    },
    {
      path:'statistics',
      title:'Statistics Page',
      component: StatisticsComponent
      // loadChildren: () => import('./components/statistics/statistics.component').then(m=>m.StatisticsComponent)
    },
    {
      path: 'home/details/:country',
      title: 'Country details',
      component: DetailCountryComponent
      // loadChildren: () => import('./components/detail-country/detail-country.component').then(m=>m.DetailCountryComponent)  
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CountriesRoutingModule { }