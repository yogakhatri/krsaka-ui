import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent {
  @Input() images: string[] = [];
  currentIndex = 0;
  isPaused = false;
  private intervalId: any;

  ngOnInit(): void {
    this.startSlideShow();
  }

  startSlideShow() {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.nextSlide();
      }
    }, 5000);
  }

  pauseSlideShow() {
    clearInterval(this.intervalId);
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.pauseSlideShow();
    } else {
      this.startSlideShow();
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    console.log("clicked prev slide")
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
