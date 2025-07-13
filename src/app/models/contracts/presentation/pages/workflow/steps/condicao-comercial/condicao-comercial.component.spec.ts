import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicaoComercialComponent } from './condicao-comercial.component';

describe('CondicaoComercialComponent', () => {
  let component: CondicaoComercialComponent;
  let fixture: ComponentFixture<CondicaoComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondicaoComercialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicaoComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
