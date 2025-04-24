import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  isMuted = true;

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  toggleMute() {
    this.isMuted = !this.isMuted;
    const videoEl = this.bgVideo.nativeElement;
    videoEl.muted = this.isMuted;
  }

}

