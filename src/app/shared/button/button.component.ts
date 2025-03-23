import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input('size')
  size = 'S';//S,M,L

  @Input('shades')
  shades = 'NA';//D,L,W,NA

  @Input('animation')
  animation = 'F';//C,FF

  @Input('name')
  name = '';


}
