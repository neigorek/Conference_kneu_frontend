import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConferenceModel } from '../../models';

@Component({
  selector: 'app-conference-preview',
  templateUrl: './conference-preview.component.html',
  styleUrls: ['./conference-preview.component.scss']
})
export class ConferencePreviewComponent implements OnInit {

  @Input() conference: ConferenceModel;
  @Output() navigateConferenceView = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onNavigateView(conference) {
    this.navigateConferenceView.emit(conference);
  }
}
