import { Pipe, PipeTransform } from '@angular/core';
import { FieldWork } from '../../Models/Job';

@Pipe({
  name: 'enumTostring'
})
export class EnumTostringPipe implements PipeTransform {

  transform(value: FieldWork): string {
    return FieldWork[value];
  }

}
