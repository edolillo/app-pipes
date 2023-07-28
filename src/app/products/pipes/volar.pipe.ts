import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class VolarPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Vuela' : ' No Vuela'
  }
}
