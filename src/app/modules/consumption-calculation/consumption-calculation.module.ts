import { CalculationResultsComponent } from './components/calculation-results/calculation-results.component';
import { CarSelectorComponent } from './components/car-selector/car-selector.component';
import { CommonModule } from '@angular/common';
import { ConsumptionCalculatorComponent } from './components/consumption-calculator/consumption-calculator.component';
import { DataRepositoryService } from './services/data-repository.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SpeedDistanceSelectorComponent } from './components/speed-distance-selector/speed-distance-selector.component';

@NgModule({
  declarations: [
    CalculationResultsComponent,
    CarSelectorComponent,
    ConsumptionCalculatorComponent,
    SpeedDistanceSelectorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ConsumptionCalculatorComponent,
  ],
  providers: [
    DataRepositoryService,
  ]
})
export class ConsumptionCalculationModule { }
