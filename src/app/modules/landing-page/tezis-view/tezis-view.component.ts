import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';

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
  @Output() navigateBack = new EventEmitter();

  isFrameLoad = false;
  teza;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.isFrameLoad = false;

  }

}
