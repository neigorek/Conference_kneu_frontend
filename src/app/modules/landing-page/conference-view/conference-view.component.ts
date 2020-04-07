import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';
import { ConferenceModel } from '../../../shared/models';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ConferenceService } from '../../../shared/services/conference.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-conference-view',
  templateUrl: './conference-view.component.html',
  styleUrls: ['./conference-view.component.scss']
})
export class ConferenceViewComponent implements OnInit {
  conferenceInstance: ConferenceModel;
  regist = false;
  file;

  constructor(
    private landingService: LandingService,
    private conferenceService: ConferenceService,
    private toastrService: ToastrService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.landingService.conference$.subscribe((conference) => {
      if (conference) {
        this.conferenceInstance = conference;
        this.conferenceInstance.dataStart = moment(conference.dataStart, 'DD/MM/YYYY').format('DD-MMM-YYYY');
        this.conferenceInstance.dataEnd = moment(conference.dataEnd, 'DD/MM/YYYY').format('DD-MMM-YYYY');
      } else {
        this.router.navigate(['/landing']);
      }
    });
  }

  onRegistration() {
    this.regist = !this.regist;
  }

  onTezu() {
    this.router.navigate([`landing/conferences/${this.conferenceInstance._id}/tezis`]);
  }

  registrationSubmit($event, idConf) {
    const regForm = {
      ...$event,
      fileName: this.file
    };
    this.conferenceService.registrationOnConference(idConf, regForm)
      .subscribe((res) => {
        this.toastrService.success('Registration Success');
        this.onRegistration();
      }, (err) => {
        this.toastrService.error('Registration Error');
        this.onRegistration();
      });
  }

  fileUploading(file) {
    const f = file;
    const formBody = new FormData();
    formBody.append('file', f);
    this.conferenceService.fileUploading(formBody)
      .subscribe((res) => {
        this.file = res.filename;
        this.toastrService.success('File Upload Success');
      }, (err) => {
        this.toastrService.error('File Upload Error');

      });
  }

  navigateBack() {
    this.location.back();
  }
}
