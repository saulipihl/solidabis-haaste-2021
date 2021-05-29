import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumptionCalculationModule } from './modules/consumption-calculation/consumption-calculation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ConsumptionCalculationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
