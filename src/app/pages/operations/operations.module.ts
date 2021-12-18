import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {OperationsComponent} from "./operations.component";



@NgModule({
  declarations: [
    OperationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OperationsComponent
      }
    ])
  ]
})
export class OperationsModule { }
