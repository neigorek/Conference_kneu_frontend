import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MDBRootModule } from 'angular-bootstrap-md';
import { ConferencePreviewComponent } from './components/conference-preview/conference-preview.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DocViewerComponent } from './components/doc-viewer/doc-viewer.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ConferencePreviewComponent, DocViewerComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    ConferencePreviewComponent,
    DocViewerComponent
  ],
  imports: [
    CommonModule,
    MDBRootModule,
    RouterModule,
    ReactiveFormsModule,
    NgxDocViewerModule,
  ],
  entryComponents: []
})

export class SharedModule { }
