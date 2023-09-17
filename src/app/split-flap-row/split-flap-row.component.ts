import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { FlapComponent } from '../flap/flap.component';

@Component({
  selector: 'app-split-flap-row',
  templateUrl: './split-flap-row.component.html',
  styleUrls: ['./split-flap-row.component.scss']
})
export class SplitFlapRowComponent {

  @ViewChildren(FlapComponent)
  flapComponents!: QueryList<SplitFlapRowComponent>;

  @Input()
  row_len: number = 7;

  @Input()
  normalCharOptions: string = ' abcdefghijklmnopqrstuvwxyz0123456789!?'

  @Input()
  superscriptCharOptions: string = ' 0123456789'

  flapLayoutArray: boolean[] = [];

  @Input()
  set flapLayout(value: string) {
    this.flapLayoutArray = this.parseBooleanOrder(value); // Convert string to char array
  }

  // parse string into boolean array - n for normal = false, s for superscript = true
  // input: "2n 1s" -> output "[false, false. true]"
  parseBooleanOrder(inputString: string): boolean[] {
    const booleanOrder: boolean[] = [];
    const parts: string[] = inputString.split(" ");
  
    for (const part of parts) {
      if (/^\d+[ns]$/.test(part)) {
        const count = parseInt(part.slice(0, -1), 10);
        const isTrue = part.endsWith("s");
        booleanOrder.push(...Array(count).fill(isTrue));
      }
    }
    return booleanOrder;
  }
  

  switchTo(text: string) {

    text = text.toLocaleUpperCase();

    this.flapComponents.forEach(async (component, index) => {
      // Access the component instance and call the function

      setTimeout(() => component.switchTo(text.length > index ? text[index] : ' '), index * 20);
      // await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (120 - 80 + 1)) + 80)); // Sleep for random time between 10 and 40 ms
    });
  }

}
