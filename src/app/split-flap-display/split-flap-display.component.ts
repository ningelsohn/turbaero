import { Component, HostListener, QueryList, ViewChildren } from '@angular/core';
import { SplitFlapRowComponent } from '../split-flap-row/split-flap-row.component';

@Component({
  selector: 'app-split-flap-display',
  templateUrl: './split-flap-display.component.html',
  styleUrls: ['./split-flap-display.component.scss']
})
export class SplitFlapDisplayComponent {

  normalCharOptions=' abcdefghijklmnopqrstuvwxyz0123456789!?';
  superscriptCharOptions=' 0123456789';

  baseXRotation = 8;
  baseYRotation = -6;

  @ViewChildren(SplitFlapRowComponent)
  splitFlapRowComponents!: QueryList<SplitFlapRowComponent>;

  ngOnInit(): void {
    this.transform = `rotateX(${this.baseXRotation}deg) rotateY(${this.baseYRotation}deg)`;
  }

  options = [
    'frankfurt A2 0615',
    'instanbul A2 1935',
    'zurich    B5 1945',
    'new york  A1 1930',
    'vienna    C4 2055'
  ]

  onClick() {

    this.splitFlapRowComponents.forEach(async (component, index) => {
      // Access the component instance and call the function

      let t = this.options[Math.floor(Math.random() * this.options.length)];

      setTimeout(() => component.switchTo(t), index * 2000);
      // await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (120 - 80 + 1)) + 80)); // Sleep for random time between 10 and 40 ms
    });
  }

  transform = '';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    // const rotationFactor = 0.5;

    const maxRotation = 5;

    const mouseX = event.clientX - window.innerWidth / 2;
    const mouseY = event.clientY - window.innerHeight / 2;

    // const rotateX = -mouseY * rotationFactor;
    // const rotateY = mouseX * rotationFactor;
    const rotateX = (-mouseY / window.innerHeight) * maxRotation + this.baseXRotation;
    const rotateY = (mouseX / window.innerWidth) * maxRotation + this.baseYRotation;

    this.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

}

