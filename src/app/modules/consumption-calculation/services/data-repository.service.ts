import { CarData } from '../models/car-data';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Speed } from '../models/speed';

/**
 * This is just a mockup of a service which would fetch data from a backend.
 */
@Injectable({
  providedIn: 'root'
})
export class DataRepositoryService {
  constructor() { }

  /**
   * Get car data.
   */
  getCarData(): Observable<CarData[]> {
    return of([
      { name: 'A', oneKmLitreConsumption: 3 },
      { name: 'B', oneKmLitreConsumption: 3.51 },
      { name: 'C', oneKmLitreConsumption: 4 },
    ]);
  }

  /**
   * Get initial speed values
   */
  getInitialSpeeds(): Observable<Speed[]> {
    return of([
      { speedKey: 'Speed 1', value: 80 },
      { speedKey: 'Speed 2', value: 100 },
    ]);
  }

  /**
   * Get initial distance value
   */
  getInitialDistance(): Observable<number> {
    return of(100);
  }
}
