import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CarSelectorComponent } from './car-selector.component';

describe('CarSelectorComponent', () => {
  let component: CarSelectorComponent;
  let fixture: ComponentFixture<CarSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSelectorComponent);
    fixture.componentInstance.carData = [
      { name: 'A', oneKmLitreConsumption: 3 },
      { name: 'B', oneKmLitreConsumption: 5 },
    ];
    fixture.componentInstance.selectedCarData = { name: 'B', oneKmLitreConsumption: 5 };
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the car elements are created', () => {
    const elements = fixture.debugElement.queryAll(By.css('.car'));
    expect (elements.length).toBe(2);
  })

  it('selected car is correct', () => {
    const selected = fixture.debugElement.query(By.css('.selected'));
    const text = selected.query(By.css('span')).nativeElement.innerText;
    expect (text).toBe('B');
  })

  it('car click event works', () => {
    spyOn(fixture.componentInstance, 'onCarSelect');
    fixture.debugElement.query(By.css('.car')).triggerEventHandler('click', {stopPropagation: () => {}})
    expect (fixture.componentInstance.onCarSelect).toHaveBeenCalledWith({ name: 'A', oneKmLitreConsumption: 3 });
  })
});
