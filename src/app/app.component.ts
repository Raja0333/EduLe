import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuScrolled = false;
  isSlidbarShowing = false;
  @HostListener('window:scroll', ['$event'])
  scrollCheck() {

    if (window.pageYOffset > 90) {
      this.isMenuScrolled = true;
    }
    else
      this.isMenuScrolled = false;
  }
  openSidebar() {
    this.isSlidbarShowing = true;
  }
  closeSidebar() {
    this.isSlidbarShowing = false;
  }
  scrollTop() {
    document.body.scrollIntoView({ behavior: 'smooth' })
  }
}
