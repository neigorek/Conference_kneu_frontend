import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {

  @Input() stringSrc: string;
  isFrameLoad = false;

  constructor(public domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.isFrameLoad = false;
  }

  onLoadiFrame($event) {
    this.isFrameLoad = true;
  }

}
