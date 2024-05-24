import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkedValue'
})
export class CheckedValuePipe implements PipeTransform {

  transform(value: string): string {
    if(value == ""){
      return "-";
    }

    return value;
   
  }

}
