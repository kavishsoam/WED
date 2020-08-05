import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'packagePrice'
})
export class PackagePricePipe implements PipeTransform {

  transform(value: any, data : any): unknown {
    return 'ashish';
  }

}
