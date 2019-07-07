import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentsComponent } from './agents.component';
const routes: Routes = [
  { path: '', component: AgentsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }
