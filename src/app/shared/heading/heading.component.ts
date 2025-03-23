import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent {
  @Input('commonHeading')
  commonHeading = 'False';

  @Input('subHeading')
  subHeading = '';

  @Input('headingText1')
  headingText1 = '';

  @Input('headingText2')
  headingText2 = '';

  @Input('headingText3')
  headingText3 = '';


  @Input('specialHeadingID')
  specialHeadingID: string | number = 2;

  @Input('algn')
  algn = 'L';//C,L
}
