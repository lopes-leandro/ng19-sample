import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosItemComponent } from './dados-item.component';

describe('DadosItemComponent', () => {
  let component: DadosItemComponent;
  let fixture: ComponentFixture<DadosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
