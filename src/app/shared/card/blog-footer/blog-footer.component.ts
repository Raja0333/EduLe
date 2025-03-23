import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog.models';


@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.css']
})
export class BlogFooterComponent {
  @Input('blog')
  blog!: Blog

}
