import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { ConferenceViewComponent } from './conference-view/conference-view.component';
import { ConferenceRegistrationFormComponent } from './conference-registration-form/conference-registration-form.component';
import { ConferenceComponent } from './conference/conference.component';
import { CafedraInfoComponent } from './cafedra-info/cafedra-info.component';
import { TezisListComponent } from './tezis-list/tezis-list.component';
import { TezisViewComponent } from './tezis-view/tezis-view.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'conferences',
    component: ConferenceComponent,
  },
  {
    path: 'conferences/:id',
    component: ConferenceViewComponent,
  },
  {
    path: 'conferences/:id/tezis',
    component: TezisListComponent,
  },
  {
    path: 'conferences/:id/tezis/:id',
    component: TezisViewComponent,
  },
  {
    path: 'about',
    component: CafedraInfoComponent,
  },
  {
    path: 'reg',
    component: ConferenceRegistrationFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
