import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchcakeComponent } from './searchcake.component';

describe('SearchcakeComponent', () => {
  let component: SearchcakeComponent;
  let fixture: ComponentFixture<SearchcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchcakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
