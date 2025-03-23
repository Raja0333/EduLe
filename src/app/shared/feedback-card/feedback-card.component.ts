import { Component, Input } from '@angular/core';
import { feedback } from 'src/app/models/feedback.models';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.css']
})
export class FeedbackCardComponent {
  @Input('item')
  item!: feedback;

}
