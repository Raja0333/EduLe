import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { feedback } from 'src/app/models/feedback.models';
import { slideConfig } from 'src/app/models/slide-config.module';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent {

  slideConfig = new slideConfig()

  feedbacks: feedback[] = [];
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.slideConfig.breakpoints = { sm: 1, md: 1, lg: 2, xl: 2 }
    this.slideConfig.showLeftRightArrow = false;
    this.slideConfig.showDots = true;
    this.getAllfeedbacks()
  }

  getAllfeedbacks() {
    this.httpClient.get('assets/data/feedbacks.json').subscribe({
      next: (feedbacks) => {

        this.feedbacks = feedbacks as feedback[];

      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
