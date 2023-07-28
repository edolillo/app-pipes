import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng.module';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { VolarPipe } from './pipes/volar.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

const routes: Routes = [{
  path:'',
  component: BasicPageComponent
},{
  path:'number',
  component:NumberPageComponent
},{
  path: 'uncommon',
  component: UncommonPageComponent
},{
  path: 'custom',
  component: OrderPageComponent
},
{
  path:'**',
  redirectTo: ''
}]


@NgModule({
  declarations: [
    BasicPageComponent,
    NumberPageComponent,
    UncommonPageComponent,
    OrderPageComponent,
    ToggleCasePipe,
    VolarPipe,
    SortByPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    PrimeNgModule,
    CommonModule
  ]
})
export class ProductsModule { }
