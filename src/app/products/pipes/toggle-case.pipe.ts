import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, letter:'a'|'e'|'i'|'o'|'u'|'' = '' ): string {
    return letter === '' ? `${value}-chachechi` : `${value}-ch${letter}ch${letter}ch${letter} `;
  }

}
