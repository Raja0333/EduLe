import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-popup',
  templateUrl: './video-popup.component.html',
  styleUrls: ['./video-popup.component.css']
})
export class VideoPopupComponent implements OnInit, OnChanges {
  @Input('youtubeUrl')
  youtubeUrl: string | undefined = undefined;

  @Input('show')
  show = true;

  @Output('close')
  onClose = new EventEmitter()

  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  disableBodyScrolling() {
    document.body.style.setProperty('overflow', 'hidden');
  }
  enableBodyScrolling() {
    document.body.style.setProperty('overflow', 'scroll');
  }

  close() {
    this.enableBodyScrolling();
    this.onClose.emit();
  }


  ngOnInit(): void {
    if (this.show) {
      this.disableBodyScrolling()
    }
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl as string)
  }
  ngOnChanges(): void {
    this.init()
  }
  init() {
    if (this.show) {
      this.disableBodyScrolling()
    }
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl as string)

  }
}
