import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent {
  @Input('align')
  align = 'C';//L

  @Input('fontColour')
  fontColour = 'W';//D

}
