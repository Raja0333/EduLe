import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-hero',
  templateUrl: './common-hero.component.html',
  styleUrls: ['./common-hero.component.css']
})
export class CommonHeroComponent {
  @Input('subHeading')
  subHeading = '';

  @Input('headingText1')
  headingText1 = '';

  @Input('headingText2')
  headingText2 = '';
}
