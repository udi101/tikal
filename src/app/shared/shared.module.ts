import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDesignModule } from './material-design.module';

import { SortByDatePipe } from './pipes/sort-by-date.pipe';
@NgModule({
  declarations: [SortByDatePipe],
  imports: [
    CommonModule,
  ],
  exports: [MaterialDesignModule, SortByDatePipe]
})
export class SharedModule { }
