import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitFlapDisplayComponent } from './split-flap-display.component';

describe('SplitFlapDisplayComponent', () => {
  let component: SplitFlapDisplayComponent;
  let fixture: ComponentFixture<SplitFlapDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitFlapDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitFlapDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
