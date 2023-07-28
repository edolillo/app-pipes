import { Hero } from './../interfaces/hero.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy: keyof  Hero | '' = ''): Hero[] {

    return sortBy !== '' ? heroes.sort((a,b)=> a[sortBy] > b[sortBy] ? 1 : -1) : heroes;
  }

}
