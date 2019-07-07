import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsComponent } from './agents.component';
@NgModule({
  declarations: [AgentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
