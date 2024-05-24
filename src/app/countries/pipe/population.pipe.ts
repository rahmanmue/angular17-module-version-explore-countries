import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value == null) return '-'; 
   
    const formattedValue = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return formattedValue + ' people'
  }

}
