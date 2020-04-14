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
  @Input() loading;
  @Output() navigateBack = new EventEmitter();
  @Output() addComm = new EventEmitter();

  isFrameLoad = false;
  teza;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.isFrameLoad = false;

  }

  addComment(formValue) {
    this.addComm.emit([formValue, this.teza._id]);
  }
}
