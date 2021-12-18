import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {StatisticsComponent} from "./statistics.component";



@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StatisticsComponent
      }
    ])
  ]
})
export class StatisticsModule { }
