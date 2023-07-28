import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  menuItems: MenuItem[] | undefined;


  ngOnInit() {
      this.menuItems = [
        {
          label: 'Pipes de angular',
          icon: 'pi pi-fw pi-desktop',
          items: [
            {
              label: 'Textos y Fechas',
              icon: 'pi pi-fw pi-align-left',
              routerLink:'basic'
          },
          {
              label: 'Numeros',
              icon: 'pi pi-fw pi-dollar',
              routerLink: 'number',

          },
          {
            label: 'No comunes',
            icon: ' pi pi-fw pi-globe',
            routerLink: 'uncommon'
          }
          ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-fw pi-star',
        items:[
          {
            label: 'Custom',
            icon: 'pi pi-fw pi-server',
            routerLink: 'custom'
        },
        {
            label: 'Personalizado 2',
            icon: 'pi pi-fw pi-android',
            routerLink: 'toto2'
        },
        ]
      }];
  }
}
