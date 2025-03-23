import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog.models';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs: Blog[] = [];
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.getAllBlogs()
  }
  getAllBlogs() {
    this.httpClient.get('assets/data/blogs.json').subscribe({
      next: (blogs) => {

        this.blogs = blogs as Blog[];
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
