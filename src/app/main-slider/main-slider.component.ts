import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})

export class MainSliderComponent implements OnInit {
  slides = [
    {
      img: '../../assets/img/main-slider/slide3.png',
      text: 'Some Text 3',
      active: true
    },
    {
      img: '../../assets/img/main-slider/slide2.png',
      text: 'Some Text 2',
      active: true
    },
    {
      img: '../../assets/img/main-slider/slide1.png',
      text: 'Some Text 1',
      active: true
    },
  ];

  activSlide: any = this.slides[0];
  activeSlideIndex: number = this.slides.length - 1;
  activeDotIndex:number = 0;
  intervalID: any;

  constructor() {
  }

  ngOnInit() {
    this.slide(this.activeSlideIndex);
  }

  slide(activeSlideIndex): void {
    
    this.intervalID = setInterval(() => {
      let activeSlide = this.slides[activeSlideIndex];
      activeSlide.active = false; 

      if (activeSlideIndex === 0) {
        this.slides.forEach(element => {
          element.active = true;
        });
        activeSlideIndex = this.slides.length - 1;
        this.activeDotIndex = 0;
      } else {
        this.activeDotIndex++;
        activeSlideIndex--;
      }
      
    }, 3000);
  }

  changeSlide(dotIndex): void {
  
    clearInterval(this.intervalID);
    
    let slideIndex = this.slides.length - 1 - dotIndex;

    for (let i = this.slides.length - 1; i >= 0; i--) {
      if (i > slideIndex) {
        this.slides[i].active = false;
      } else {
        this.slides[i].active = true;
      }
      this.activeSlideIndex = slideIndex;
      this.activeDotIndex = dotIndex;

    }
      this.slide(this.activeSlideIndex);
  }

}
