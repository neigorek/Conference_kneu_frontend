import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../../../shared/services/conference.service';
import { ConferenceModel } from '../../../shared/models';
import { Router } from '@angular/router';
import { LandingService } from '../landing.service';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.scss']
})
export class ConferenceListComponent implements OnInit {

  public conferenceList: ConferenceModel[];

  constructor(
    private conferenceService: ConferenceService,
    private router: Router,
    private landingService: LandingService
  ) { }

  ngOnInit(): void {
    this.conferenceService.getConferenceList()
      .subscribe((res) => {
        this.conferenceList = res;
        this.landingService.setConferences(res);
      });
  }

  openView(conference) {
    this.landingService.setConference(conference);
    this.router.navigate([`landing/conferences/${conference._id}`]);
  }

  openTezisView(conference) {
    this.landingService.setConference(conference);
    this.router.navigate([`landing/conferences/${conference._id}/tezis`]);
  }
}
