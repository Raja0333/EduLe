import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ratting',
  templateUrl: './ratting.component.html',
  styleUrls: ['./ratting.component.css']
})
export class RattingComponent {
  @Input('Value')
  Value: number = 0;

  @Input('showNumber')
  showNumber = true;

  totalStar = 5;

}
