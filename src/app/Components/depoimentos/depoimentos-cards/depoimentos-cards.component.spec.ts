import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentosCardsComponent } from './depoimentos-cards.component';

describe('DepoimentosCardsComponent', () => {
  let component: DepoimentosCardsComponent;
  let fixture: ComponentFixture<DepoimentosCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepoimentosCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepoimentosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
