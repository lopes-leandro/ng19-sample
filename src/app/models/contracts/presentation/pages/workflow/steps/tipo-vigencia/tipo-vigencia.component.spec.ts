import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVigenciaComponent } from './tipo-vigencia.component';

describe('TipoVigenciaComponent', () => {
  let component: TipoVigenciaComponent;
  let fixture: ComponentFixture<TipoVigenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoVigenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoVigenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
