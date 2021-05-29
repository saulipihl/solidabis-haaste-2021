import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculationResultsComponent } from '../calculation-results/calculation-results.component';
import { CarSelectorComponent } from '../car-selector/car-selector.component';
import { SpeedDistanceSelectorComponent } from '../speed-distance-selector/speed-distance-selector.component';

import { ConsumptionCalculatorComponent } from './consumption-calculator.component';

describe('ConsumptionCalculatorComponent', () => {
  let component: ConsumptionCalculatorComponent;
  let fixture: ComponentFixture<ConsumptionCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConsumptionCalculatorComponent,
        CalculationResultsComponent,
        SpeedDistanceSelectorComponent,
        CarSelectorComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
