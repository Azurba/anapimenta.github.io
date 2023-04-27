import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  picturesDesktop : string[] = ['./assets/img/1-1.jpeg', './assets/img/2-1.jpeg', './assets/img/3-1.jpeg', './assets/img/4-1.jpeg'];
  picturesMobile : string[] =  ['./assets/img/1.jpeg', './assets/img/2.jpeg', './assets/img/3.jpeg', './assets/img/4.jpeg'];
  usePicturesDesktop: boolean | undefined;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:resize', [])
  onWindowResize() {
    this.setPicturesToUse();
  }

  ngOnInit(): void {
    this.setPicturesToUse();
  }

  setPicturesToUse() {
    const width = window.innerWidth;
    this.usePicturesDesktop = width > 768; // Set breakpoint as per your requirement
  }

}
