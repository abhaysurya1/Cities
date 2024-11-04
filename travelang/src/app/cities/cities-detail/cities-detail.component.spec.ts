import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesDetailComponent } from './cities-detail.component';

describe('MovieDetailComponent', () => {
  let component: CitiesDetailComponent;
  let fixture: ComponentFixture<CitiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitiesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
