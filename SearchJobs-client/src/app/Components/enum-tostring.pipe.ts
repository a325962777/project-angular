import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumTostring'
})
export class EnumTostringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
