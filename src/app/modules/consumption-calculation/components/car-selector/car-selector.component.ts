import { CarData } from '../../models/car-data';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Used to display and choose a car type to process.
 */
@Component({
  selector: 'app-car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.scss']
})
export class CarSelectorComponent {
  @Input() carData: CarData[] = []
  @Input() selectedCarData: CarData | undefined;
  @Output() carSelected = new EventEmitter<CarData>();

  constructor() { }

  /**
   * When a car type is clicked on, send the event about it.
   */
  onCarSelect(carData: CarData): void {
    this.carSelected.emit(carData);
  }
}
