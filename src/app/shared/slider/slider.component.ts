import { Component, Input, OnInit, OnChanges, ViewChild, ElementRef, AfterViewInit, HostListener, EventEmitter, Output, ContentChild, TemplateRef } from '@angular/core';
import { Client } from 'src/app/models/client.models';
import { Course } from 'src/app/models/corses.models';
import { feedback } from 'src/app/models/feedback.models';
import { slideConfig } from 'src/app/models/slide-config.module';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  isSlideOver = false;

  @Input('items')
  items: string[] | feedback[] | Client[] = [];

  activeSlide = 1;

  dots: number[] = [];


  @Output('select')
  onSelect: EventEmitter<string> = new EventEmitter<string>()

  @ContentChild('template')
  template: TemplateRef<any> | undefined;

  @Input('slideConfig')
  slideConfig = new slideConfig();

  getIterms() {
    return this.items as any[];
  }


  sliderContainerWidth = 0;
  sliderWidth = 0;
  slideWidth = 0;
  elementToShow = 1;
  sliderMarginLeft = 0;

  @ViewChild('sliderContainer')
  sliderContainer!: ElementRef;
  @HostListener('window:resize', ['$event'])

  onScreenRisize() {
    this.setUpSlider()

  }

  ngAfterViewInit(): void {
    this.setUpSlider()
  }

  ngOnInit() {
  }


  setUpSlider() {
    if (window.innerWidth < 500)
      this.elementToShow = this.slideConfig.breakpoints.sm;
    else if (window.innerWidth < 900)
      this.elementToShow = this.slideConfig.breakpoints.md;
    else if (window.innerWidth < 1300)
      this.elementToShow = this.slideConfig.breakpoints.lg;
    else
      this.elementToShow = this.slideConfig.breakpoints.xl;

    if (this.items.length < this.elementToShow) {
      this.elementToShow = this.items.length;
    }

    this.dots = Array(this.items.length - this.elementToShow + 1)


    let container = this.sliderContainer.nativeElement as HTMLElement;
    this.sliderContainerWidth = container.clientWidth;
    this.slideWidth = this.sliderContainerWidth / this.elementToShow;
    this.sliderWidth = this.slideWidth * this.items.length;

    if (this.slideConfig.autoPlay) this.autoPlay()
  }
  move(slideId: number) {
    let difference = slideId - this.activeSlide;
    if (difference > 0) {
      for (let index = 0; index < difference; index++) {
        this.next()
      }
    }
    else if (difference < 0) {
      for (let index = 0; index < Math.abs(difference); index++) {
        this.prev()
      }
    }
  }


  prev() {
    if (this.sliderMarginLeft === 0) {
      return
    }
    this.activeSlide--;
    this.sliderMarginLeft = this.sliderMarginLeft + this.slideWidth;
  }
  next() {
    const notShowingElementCount = this.items.length - this.elementToShow;
    const possibleMargin = -(notShowingElementCount * this.slideWidth)
    if (this.sliderMarginLeft <= possibleMargin) {
      this.isSlideOver = true;
      return
    }
    this.isSlideOver = false;
    this.activeSlide++;
    this.sliderMarginLeft = this.sliderMarginLeft - this.slideWidth;
  }

  autoPlay() {
    setTimeout(() => {
      if (this.isSlideOver === true) {
        this.sliderMarginLeft = this.slideWidth;
      }
      this.next();
      this.autoPlay();
    }, 1000)
  }


}

