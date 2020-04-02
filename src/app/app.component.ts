import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IITVE-KNEU-CONFERENCE';

  constructor(private router: Router) {
  }

  conferenceNavigate($event) {
    this.router.navigate([`${$event}`]);
  }
}
