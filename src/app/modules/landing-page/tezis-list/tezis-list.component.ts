import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tezis-list',
  templateUrl: './tezis-list.component.html',
  styleUrls: ['./tezis-list.component.scss']
})
export class TezisListComponent implements OnInit {

  constructor(private landingService: LandingService, private router: Router) { }

  tezisList;
  isList = true;
  selectedTezis;
  ngOnInit(): void {
    this.landingService.conference$.subscribe((conference) => {
      if (conference && conference.documents && conference.documents.length > 0) {
        this.tezisList = conference.documents;
      } else {
        this.router.navigate(['']);
      }
    });
  }

  onNavigateTezisView(tezis) {
    this.isList = false;
    this.selectedTezis = tezis;

  }

}

