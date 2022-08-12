import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';

const routes: Routes = [
  {path: 'ExhangeRate' , component: ExchangeRateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[ExchangeRateComponent]