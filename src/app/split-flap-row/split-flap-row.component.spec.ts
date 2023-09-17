import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitFlapRowComponent } from './split-flap-row.component';

describe('SplitFlapRowComponent', () => {
  let component: SplitFlapRowComponent;
  let fixture: ComponentFixture<SplitFlapRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitFlapRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitFlapRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
