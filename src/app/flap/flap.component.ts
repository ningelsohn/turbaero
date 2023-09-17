import { ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-flap',
  templateUrl: './flap.component.html',
  styleUrls: ['./flap.component.scss']
})
export class FlapComponent {
  
  @ViewChild('flap', { read: ElementRef }) flap!: ElementRef;
  
  currentChar: number = -2;
  charOptionsArray: string[] = [];
  
  @Input()
  set charOptions(value: string) {
    this.charOptionsArray = value.split(''); // Convert string to char array
  }

  @Input()
  isSuperscript: boolean = true;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private cdRef: ChangeDetectorRef) {
  }


  ngAfterViewInit(): void {

    // create first flipped tile showing lower half of first char
    this.createNewTile();
    const tile = this.elementRef.nativeElement.querySelector('.tile') as HTMLDivElement;
    tile.classList.add('flipped');

    // create second unflipped tile showing upper halp of first char
    this.createNewTile();
    this.cdRef.detectChanges();
  }


  next(){

    // get reference to current first tile
    const currentFirstTile = this.elementRef.nativeElement.querySelector('.tile') as HTMLDivElement;

    // get reference to currently first flipped tile
    const currentFirstFlippedTile = this.elementRef.nativeElement.querySelector('.flipped') as HTMLDivElement;
    currentFirstFlippedTile.classList.add('backshift');

    // create new tile
    this.createNewTile();

    // start flipping only after creation of new tile, prevents empty space after starting the flip
    currentFirstTile.classList.add('flipped');
    setTimeout(() => this.removeLastTile(), 250);
  }

  switchToAfterTimeout(char: string){
    // setTimeout(() => this.switchTo(char), Math.floor(Math.random() * (320 - 280 + 1)) + 280);
    this.switchTo(char);
  }

  switchTo(char: string) {

    char = char.toLocaleLowerCase();

    // abort if char not available or reached already
    if (!this.charOptionsArray.includes(char) || this.charOptionsArray[this.currentChar] == char){
      return;
    }

    // fap and schedule next switch
    this.next();
    setTimeout(() => this.switchTo(char), 100);
  }

  createNewTile() {

    // create tile div
    const tile = this.renderer.createElement('div');
    this.renderer.addClass(tile, 'tile');
    if (this.isSuperscript){
      this.renderer.addClass(tile, "superscript");
    }
    
    // create content div for frontside of tile
    const frontContent = this.renderer.createElement('div');
    this.renderer.addClass(frontContent, 'content');
    this.renderer.appendChild(frontContent, this.renderer.createText(this.charOptionsArray[(this.currentChar + 1 + this.charOptionsArray.length) % this.charOptionsArray.length]));
    
    // create div for frontside and insert content
    const front = this.renderer.createElement('div');
    this.renderer.addClass(front, 'front');
    this.renderer.appendChild(front, frontContent);
    
    // create content div for backside of tile
    const backContent = this.renderer.createElement('div');
    this.renderer.addClass(backContent, 'content');
    this.renderer.appendChild(backContent, this.renderer.createText(this.charOptionsArray[(this.currentChar + 2 + this.charOptionsArray.length) % this.charOptionsArray.length]));
    
    // create div for backside and insert content
    const back = this.renderer.createElement('div');
    this.renderer.addClass(back, 'back');
    this.renderer.appendChild(back, backContent);
    
    // insert frontside and backside to tile
    this.renderer.appendChild(tile, front);
    this.renderer.appendChild(tile, back);

    // get flap elem, find first tile and insert new tile in front
    const flap = this.flap.nativeElement;
    const firstTile = flap.querySelector('.tile');
    this.renderer.insertBefore(flap, tile, firstTile);

    // Not working !!!
    // this.elementRef.nativeElement.querySelector('.tile').addEventListener('animationend', () => {
    //   console.log('Animation has ended');
    // });

    // increment current char value
    this.currentChar = (this.currentChar + 1) % this.charOptionsArray.length;
  }

  removeLastTile(){

    // get flap elem and find last tile
    const flap = this.flap.nativeElement;
    const lastTile = flap.querySelector('.tile:last-child');

    // remove if present
    if (lastTile) {
      this.renderer.removeChild(flap, lastTile);
    }
    
    // this.audio.play();
  }

}
