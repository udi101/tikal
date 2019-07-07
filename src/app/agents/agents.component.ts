import { Component, OnInit } from '@angular/core';

import { IMission } from './interfaces/mission.interface';
import { MissionsService } from './services/missions.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  agentList = new Array<IMission>();
  countryOccurrences: { country: string, occurrences: number };
  constructor(private missionsService: MissionsService) { }

  ngOnInit() {
    this.agentList = this.missionsService.getMissions();
    this.countryOccurrences = this.getCountry();
  }


  // Get all the missions performed by isolated agents
  getIsolatedAgentsMissions(): Array<IMission> {
    if (!this.agentList) {
      return;
    }
    const isolatedAgetns = this.agentList.filter(ag => this.agentList.filter(a => a.agent === ag.agent).length === 1);
    return isolatedAgetns;
  }


  // Getting the country with most isolated agents and the number of occurrences
  getCountry(): { country: string, occurrences: number } {
    const countries: { [key: string]: number } = {};
    this.getIsolatedAgentsMissions().forEach((mission: IMission) => {
      if (!countries[mission.country]) {
        countries[mission.country] = 1;
      } else {
        countries[mission.country]++;
      }
    });
    const maxIsolatedCountry = Object.keys(countries).reduce((a, b) => countries[a] > countries[b] ? a : b);
    return { country: maxIsolatedCountry, occurrences: countries[maxIsolatedCountry] };
  }

}

