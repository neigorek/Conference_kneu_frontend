import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { CafedraInfoPageComponent } from './cafedra-info-page/cafedra-info-page.component';
import { SharedModule } from '../../shared/shared.module';
import { MDBRootModule } from 'angular-bootstrap-md';
import { ConferenceListComponent } from './conference-list/conference-list.component';
import { ConferenceViewComponent } from './conference-view/conference-view.component';
import { ConferenceRegistrationFormComponent } from './conference-registration-form/conference-registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConferenceComponent } from './conference/conference.component';
import { CafedraInfoComponent } from './cafedra-info/cafedra-info.component';

@NgModule({
  declarations: [LandingPageComponent, CafedraInfoPageComponent, ConferenceListComponent, ConferenceViewComponent, ConferenceRegistrationFormComponent, ConferenceComponent, CafedraInfoComponent],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        SharedModule,
        MDBRootModule,
        ReactiveFormsModule
    ]
})
export class LandingPageModule { }
