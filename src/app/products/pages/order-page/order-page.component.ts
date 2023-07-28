import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html'
})
export class OrderPageComponent {

  vocal: 'a'|'e'|'i'|'o'|'u'|'' = '';

toggleChange(){
   switch (this.vocal) {
      case 'a':
        this.vocal = 'e';
        break;
      case 'e':
        this.vocal = 'i';
        break;
      case 'i':
        this.vocal = 'o';
        break;
      case 'o':
        this.vocal = 'u';
        break;
      case 'u':
        this.vocal = '';
        break;
      case '':
        this.vocal = 'a';
        break;
   }
}

public heroes: Hero[] = [{
  name: 'Superman',
  canFly: true,
  color: Color.blue
},{
  name: 'Batman',
  canFly: false,
  color: Color.black
},{
  name: 'Linterna verde',
  canFly: false,
  color: Color.green
},{
  name: 'Spiderman',
  canFly: false,
  color: Color.red
},{
  name: 'Shazam',
  canFly: true,
  color: Color.red
}];


public keyHero : keyof Hero | '' = '';


sortBy(value: keyof Hero) {
  this.keyHero = value;
}

}
