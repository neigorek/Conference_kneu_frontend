import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss']
})
export class CommentsSectionComponent implements OnInit {

  @Input() commentsList: any[];

  constructor() { }

  ngOnInit(): void {
  }

  changeDate(date) {
    return moment(date).format('DD-MM-YYYY');
  }

}
