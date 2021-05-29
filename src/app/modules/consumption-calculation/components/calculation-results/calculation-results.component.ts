import { CalculationResult } from '../../models/calculation-result';
import { CarData } from '../../models/car-data';
import { Component, Input, OnChanges } from '@angular/core';
import { Speed } from '../../models/speed';

/**
 * Gets  the selected data and calculated the travel time and consumption for each speed.
 * Also displays them.
 */
@Component({
  selector: 'app-calculation-results',
  templateUrl: './calculation-results.component.html',
  styleUrls: ['./calculation-results.component.scss']
})
export class CalculationResultsComponent implements OnChanges {
  readonly consumptionFactor: number = 1.009; // Factor to how much the consumption changes when the speed increases 1km

  @Input() speeds: Speed[]; // Selected speeds
  @Input() distance: number; // Selected distance
  @Input() selectedCarData: CarData | undefined;
  results: CalculationResult[] = [];

  // Differences of the results
  timeDifferenceString: string | undefined;
  consumptionDifference: number | undefined;

  constructor() { }

  ngOnChanges(): void {
    this.calculate(); // Calculate always when inputs change
  }

  /**
   * Calculates the travel time and consumption for each speed and their differences.
   */
  calculate(): void {
    if (!this.selectedCarData) { // If car data isn't yet selected, don't calculate
      return;
    }

    // Car data has consumption for the l/100km. Check how much litre consumption is for the l/<distance>km
    const litreConsumptionForOnekmPerDistance = (this.selectedCarData.oneKmLitreConsumption * this.distance) / 100;

    // Generate results
    const results = this.speeds.map(s => {
      // Travel time
      const travelTime = this.getTravelTime(s);
      const travelTimeString = this.getTravelTimeString(travelTime);

      // Consumption.
      // Car data has consumption for the l/100km for speed 1 km/h.
      // For each increase in speed, the consumption is multiplied by the consumption factor.
      // So for 2km/h speed, consumption would be "1kmConsumption * consumptionFactor" - for 3km/h, "1kmConsumption * consumptionFactor * consumptionFactor"
      // There we can get the formula "1kmConsumption * (Math.pow(this.consumptionFactor, speed - 1))"
      const litreConsumption = litreConsumptionForOnekmPerDistance * (Math.pow(this.consumptionFactor, s.value - 1))
      const result: CalculationResult = {
        speedValue: s.value,
        litreConsumption,
        travelTime: travelTimeString,
      }
      return result;
    })

    // Calculate differences in speed results
    const timeDifference = Math.abs(this.getTravelTime(this.speeds[0]) - this.getTravelTime(this.speeds[1]))
    this.timeDifferenceString = this.getTravelTimeString(timeDifference);

    this.consumptionDifference = Math.abs(results[0].litreConsumption - results[1].litreConsumption);

    this.results = results;
  }

  /**
   * Get travel time string presentation in format ..h ..m
   */
  private getTravelTimeString(travelTime: number): string {
    const hourValue = parseInt(travelTime.toString());
    const hours = hourValue !== 0 ? `${hourValue}h ` : '';
    const minutesValue = Math.round(travelTime * 60 % 60);
    const minutes = minutesValue !== 0 ? `${Math.round(travelTime * 60 % 60)}m` : '';
    return hours !== '' || minutes !== '' ? `${hours}${minutes}` : '-';
  }

  /**
   * Get travel time based on physics formula t = s/v
   */
  private getTravelTime(s: Speed) {
    return this.distance / s.value;
  }
}
