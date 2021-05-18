import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakecartComponent } from './cakecart.component';

describe('CakecartComponent', () => {
  let component: CakecartComponent;
  let fixture: ComponentFixture<CakecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakecartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
