import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any, srarchTerm: any): any {
    return value.filter(function(SerchValue:any){

      return SerchValue.email.toLowerCase().indexOf(srarchTerm.toLowerCase()) >-1;
    })
  }

}

