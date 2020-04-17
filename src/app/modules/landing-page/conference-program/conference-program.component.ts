import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';
import { ConferenceModel } from '../../../shared/models';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-conference-program',
  templateUrl: './conference-program.component.html',
  styleUrls: ['./conference-program.component.scss']
})
export class ConferenceProgramComponent implements OnInit {

  conference: ConferenceModel;

  constructor(private landingService: LandingService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.landingService.conference$
      .subscribe((conf) => {
        if (conf) {
          this.conference = conf;
        } else {
          this.router.navigate([`/landing`]);
        }
      });
  }

  navigateBack() {
    this.location.back();
  }

}
