import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorTemperaturaComponent } from './conversor-temperatura.component';

describe('ConversorTemperaturaComponent', () => {
  let component: ConversorTemperaturaComponent;
  let fixture: ComponentFixture<ConversorTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversorTemperaturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversorTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
