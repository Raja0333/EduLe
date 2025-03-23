import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.models';
import { Course } from 'src/app/models/corses.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input('input')
  input!: Course | Blog;
  @Input('type')
  type = 'C';//C,B
  casteToCourse(input: Course | Blog) {
    return input as Course;
  }
  casteToBlog(input: Course | Blog) {
    return input as Blog;
  }

}
