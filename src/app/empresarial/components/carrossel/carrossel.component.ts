import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private intervalId: any;

  slides = [
    {
      titlePart1: "",
      titlePart2: "",
      description: "",
      ctaText: "",
      buttonText: "",
      image: "/images/BannerGames.png" // Make sure this path is correct
    },
    {
      titlePart1: "",
      titlePart2: "",
      description: "",
      ctaText: "",
      buttonText: "",
      image: "/images/drone.png" // Update with your second image path
    },
    {
      titlePart1: "",
      titlePart2: "",
      description: "",
      ctaText: "Feel the Difference",
      buttonText: "Buy Now",
      image: "/images/Home5.png" // Update with your third image path
    }
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Changes every 5 seconds
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    // Restart autoplay when user interacts manually
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
