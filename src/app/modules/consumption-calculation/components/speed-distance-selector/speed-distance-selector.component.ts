import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Speed } from '../../models/speed';

/**
 * Provides the selection template for speed and distance values.
 */
@Component({
  selector: 'app-speed-distance-selector',
  templateUrl: './speed-distance-selector.component.html',
  styleUrls: ['./speed-distance-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeedDistanceSelectorComponent {
  @Input() speeds: Speed[];
  @Input() distance: number;
  @Output() speedChanged = new EventEmitter<Speed>();
  @Output() distanceChanged = new EventEmitter<number>();

  /**
   * When the user is done editing the speed, update the speed object and send event
   */
  onSpeedChanged(event: any, speed: Speed): void {
    let value = this.getValidValue(event);
    speed.value = value;
    this.speedChanged.emit(speed);
  }

  /**
   * When the user is done editing the distance, send event
   */
  onDistanceChanged(event: any): void {
    let value = this.getValidValue(event);
    this.distanceChanged.emit(value);
  }

  /**
   * Validate the input value from the input changed event
   */
  private getValidValue(event: any) {
    let value = +event.target.value; // Cast to number
    if (value <= 0) { // We don't want negative or zero as a value
      value = 1;
    }
    event.target.value = value; // Set the value back to the input
    return value;
  }
}
