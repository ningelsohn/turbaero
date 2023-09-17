import { Component, ViewChild } from '@angular/core';
import { SplitFlapDisplayComponent } from '../split-flap-display/split-flap-display.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(SplitFlapDisplayComponent) splitFlapDisplay!: SplitFlapDisplayComponent;

  ngAfterViewInit(): void {
    this.splitFlapDisplay.onClick();
  }

}
