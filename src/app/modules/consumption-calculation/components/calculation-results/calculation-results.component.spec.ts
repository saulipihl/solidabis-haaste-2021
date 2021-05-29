import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationResultsComponent } from './calculation-results.component';

describe('CalculationResultsComponent', () => {
  let component: CalculationResultsComponent;
  let fixture: ComponentFixture<CalculationResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationResultsComponent);
    fixture.componentInstance.distance = 10;
    fixture.componentInstance.speeds = [
      { speedKey: 'Speed 1', value: 10 },
      { speedKey: 'Speed 2', value: 30 },
    ];
    fixture.componentInstance.selectedCarData = {
      name: 'A',
      oneKmLitreConsumption: 3,
    }

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculation works', () => {
    fixture.componentInstance.calculate();
    expect(fixture.componentInstance.results[0].travelTime).toBe('1h ');
    expect(fixture.componentInstance.results[0].litreConsumption.toFixed(2)).toBe('0.33');
    expect(fixture.componentInstance.results[1].travelTime).toBe('20m');
    expect(fixture.componentInstance.results[1].litreConsumption.toFixed(2)).toBe('0.39');
  });
});
