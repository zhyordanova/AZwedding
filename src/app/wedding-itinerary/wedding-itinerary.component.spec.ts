import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingItineraryComponent } from './wedding-itinerary.component';

describe('WeddingItineraryComponent', () => {
  let component: WeddingItineraryComponent;
  let fixture: ComponentFixture<WeddingItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingItineraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
