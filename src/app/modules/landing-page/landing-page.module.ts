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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConferenceComponent } from './conference/conference.component';
import { CafedraInfoComponent } from './cafedra-info/cafedra-info.component';
import { TezisListComponent } from './tezis-list/tezis-list.component';
import { TezisViewComponent } from './tezis-view/tezis-view.component';
import { FlexModule } from '@angular/flex-layout';
import { CommentsSectionComponent } from './tezis-view/comments-section/comments-section.component';
import { CommentFormComponent } from './tezis-view/comment-form/comment-form.component';
import { ConferenceProgramComponent } from './conference-program/conference-program.component';

@NgModule({
  declarations: [LandingPageComponent, CafedraInfoPageComponent,
    ConferenceListComponent, ConferenceViewComponent,
    ConferenceRegistrationFormComponent,
    ConferenceComponent, CafedraInfoComponent, TezisListComponent,
    TezisViewComponent, CommentsSectionComponent, CommentFormComponent, ConferenceProgramComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
    MDBRootModule,
    ReactiveFormsModule,
    FlexModule,
    FormsModule,
  ]
})
export class LandingPageModule { }
