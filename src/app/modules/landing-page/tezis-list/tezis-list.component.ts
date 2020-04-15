import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ChatService } from '../../../shared/services/chat.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tezis-list',
  templateUrl: './tezis-list.component.html',
  styleUrls: ['./tezis-list.component.scss']
})
export class TezisListComponent implements OnInit {

  constructor(private landingService: LandingService, private router: Router,
              private location: Location, private chatService: ChatService,
              private toastrService: ToastrService,
  ) { }

  tezisList;
  isList = true;
  selectedTezis;
  conference;
  loading;

  ngOnInit(): void {
    this.landingService.conference$.subscribe((conference) => {
      if (conference && conference.documents && conference.documents.length > 0) {
        this.conference = conference;
        this.tezisList = conference.documents;
      } else {
        this.router.navigate(['']);
      }
    });
  }

  onNavigateTezisView(tezis) {
    this.listShow();
    this.selectedTezis = tezis;
  }

  listShow() {
    this.isList = !this.isList;
  }

  addCommentar($event) {
    const id = this.selectedTezis._id;
    this.loading = true;
    this.chatService.postComment($event[0], this.conference._id, $event[1])
      .subscribe((res) => {
        this.tezisList = res.documents;
        this.selectedTezis = res.documents.find((tezis) => tezis._id === id);
        this.toastrService.success('Your Comment Success Add');
        this.loading = false;
      });
  }

  navigateBack() {
    this.location.back();
  }
}

