import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/models/corses.models';

@Component({
  selector: 'app-courese-fotter',
  templateUrl: './courese-fotter.component.html',
  styleUrls: ['./courese-fotter.component.css']
})
export class CoureseFotterComponent {
  @Input('course')
  course!: Course


}
