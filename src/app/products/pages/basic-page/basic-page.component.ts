import { Component } from '@angular/core';

@Component({
  selector: 'product-basic-page',
  templateUrl: './basic-page.component.html'
})
export class BasicPageComponent {
 public lowerText = 'eduardo';
 public upperText = 'LILLO';
 public fullText = 'eDuaRdo LiLLO';

 public currentDate: Date = new Date();
}
