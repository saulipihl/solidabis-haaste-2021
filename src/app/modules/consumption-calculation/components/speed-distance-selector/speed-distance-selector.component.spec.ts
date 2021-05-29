import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SpeedDistanceSelectorComponent } from './speed-distance-selector.component';

describe('SpeedDistanceSelectorComponent', () => {
  let component: SpeedDistanceSelectorComponent;
  let fixture: ComponentFixture<SpeedDistanceSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedDistanceSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedDistanceSelectorComponent);
    fixture.componentInstance.distance = 10;
    fixture.componentInstance.speeds = [
      { speedKey: 'Speed 1', value: 10 },
      { speedKey: 'Speed 2', value: 30 },
    ];

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('inputs exist', () => {
    const inputElements = fixture.debugElement.queryAll(By.css('input'));
    expect(inputElements.length).toBe(3);
  });

  it('change event works', () => {
    const element = fixture.debugElement.query(By.css('.speed-input'));
    spyOn(fixture.componentInstance, 'onSpeedChanged');
    element.triggerEventHandler('change', {stopPropagation: () => {}})
    expect (fixture.componentInstance.onSpeedChanged).toHaveBeenCalled();
  });
});
