import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlapComponent } from './flap.component';

describe('FlapComponent', () => {
  let component: FlapComponent;
  let fixture: ComponentFixture<FlapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
