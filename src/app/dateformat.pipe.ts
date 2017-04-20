import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateformat'
})
export class DateformatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value != null) {     
            return moment(value).format('DD/MM/YYYY');
        }
        else {
            return value;
        }
  }

}