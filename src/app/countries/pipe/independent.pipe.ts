import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'independent'
})
export class IndependentPipe implements PipeTransform {

  transform(value:boolean): string {
    if(value){
      return "🚩 Yes "
    }else{
      return "Not Yet Independent"
    }
  }

}
