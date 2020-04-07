import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-viewer',
  templateUrl: './doc-viewer.component.html',
  styleUrls: ['./doc-viewer.component.scss']
})
export class DocViewerComponent implements OnInit {

  @Input() stringSrc: string;
  isFrameLoad = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isFrameLoad = false;
  }

  onLoadiFrame($event) {
    this.isFrameLoad = true;
    this.cdr.detectChanges();
  }

}
