import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tezis-view',
  templateUrl: './tezis-view.component.html',
  styleUrls: ['./tezis-view.component.scss']
})
export class TezisViewComponent implements OnInit {

  @Input() set tezisInfo(tezisInfo: any) {
    if (tezisInfo) {
      this.teza = tezisInfo;
    }
  }

  isFrameLoad = false;
  teza;

  constructor() { }

  ngOnInit(): void {
    this.isFrameLoad = false;

  }
  //
  // onLoadiFrame($event) {
  //   this.isFrameLoad = true;
  // }



}
