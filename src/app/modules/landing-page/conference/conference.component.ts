import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';
import { ConferenceModel } from '../../../shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent implements OnInit {

  conferenceList: ConferenceModel[];

  constructor(private landingService: LandingService, private router: Router) { }

  ngOnInit(): void {
    this.landingService.conferencesList$.subscribe((conference) => {
      this.conferenceList = conference;
    });
  }

  openView(conference) {
    this.landingService.setConference(conference);
    this.router.navigate([`landing/conferences/${conference._id}`]);
  }

}
