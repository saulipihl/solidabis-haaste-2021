import { CarData } from '../../models/car-data';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataRepositoryService } from '../../services/data-repository.service';
import { Speed } from '../../models/speed';
import { forkJoin, Subscription } from 'rxjs';

/**
 * Main component to orchestrate the data management for car and distance and speed selection, and providing the selections to results component.
 * Also fetches the data from the api.
 */
@Component({
  selector: 'app-consumption-calculator',
  templateUrl: './consumption-calculator.component.html',
  styleUrls: ['./consumption-calculator.component.scss']
})
export class ConsumptionCalculatorComponent implements OnInit, OnDestroy {
  carData: CarData[] = [];
  selectedCarData: CarData | undefined;
  speeds: Speed[] = [];
  distance: number = 100;
  dataSubscription: Subscription | undefined;
  errorOccurred: boolean = false;

  constructor(
    private dataRepository: DataRepositoryService,
  ) { }

  ngOnInit() {
    this.dataSubscription = forkJoin([ // Wait for all data to be fetched
      this.dataRepository.getCarData(),
      this.dataRepository.getInitialSpeeds(),
      this.dataRepository.getInitialDistance()
    ]).subscribe(data => { // Set the fetched data
      this.carData = data[0];
      this.speeds = data[1];
      this.distance = data[2]
      this.selectedCarData = this.carData[0]; // Get the first car from the received data
    }, () => { // Error handling
      this.errorOccurred = true;
    })
  }

  ngOnDestroy(): void {
    // Unsubscribe from subscriptions to avoid memory leaks
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }

  /**
   * When a car type is clicked, update the selected car data
   */
  onCarSelected(carData: CarData): void {
    this.selectedCarData = { ...carData };
  }

  /**
   * When speed value is changed, update that speed object
   */
  onSpeedChanged(speed: Speed): void {
    const speeds = [...this.speeds];
    const replaceIndex = speeds.findIndex(s => s.speedKey === speed.speedKey)
    speeds[replaceIndex] = speed;
    this.speeds = speeds;
  }

  /**
   * When distance value is changed, update the distance
   */
  onDistanceChanged(distance: number): void {
    this.distance = distance;
  }
}
