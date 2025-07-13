import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoberturasItemComponent } from './coberturas-item.component';

describe('CoberturasItemComponent', () => {
  let component: CoberturasItemComponent;
  let fixture: ComponentFixture<CoberturasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoberturasItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoberturasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
