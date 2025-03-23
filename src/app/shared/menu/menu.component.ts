import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  activeItem: number | null = null;
  selectItem(item: number) {
    this.activeItem = this.activeItem === item ? null : item;
  }
}
