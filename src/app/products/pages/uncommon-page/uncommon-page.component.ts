import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'product-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {
  // i18 Select
  public name: string = 'Eduardo';
  public gender: 'male' | 'female'  = 'male';
  public invitationMap = {
    male: 'saludarlo',
    female: 'saludarla',
    autre: 'saludarle'

  }
  changeName() {
    this.name = this.name === 'Eduardo' ? 'Marcela' : 'Eduardo';
    this.gender = this.name === 'Eduardo' ? 'male' : 'female';
  }

  // i18 plurals & slice
  public client: string[] = ['Eduardo', 'Marcela', 'Natalia', 'Aracelli'];
  public clientMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': ' tenemos # clientes esperando'
  }
  changeClient() {
    if(this.client.length === 0) return;

    this.client.pop();
  }

  // json & keyValue

  public person = {
    prenom: 'Eduardo',
    nom: 'Lillo',
    edad: 57,
    nacionalidad: 'chileno canadiense',
    estado_civil: 'casado'
  }

  // async

  public myObervableTimer : Observable<number> = interval(2000).pipe(
    tap( (value) => console.log(`tap = ${value}`))
  );

  public myPromiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('tenemos respuesta en la promesa');
    }, 3500);
  });

}
