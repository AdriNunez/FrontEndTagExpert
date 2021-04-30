import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';

import { TagPageComponent } from './pages/tag/tag-page/tag-page.component';
import { ExpertPageComponent } from './pages/expert/expert-page/expert-page.component';
import { TagListComponent } from './views/tag-list/tag-list.component';
import { ExpertComponent } from './components/forms/expert/expert.component';
import { ExpertListComponent } from './views/expert-list/expert-list.component';
import { PopupComponent } from './components/popup/popup.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateExpertPageComponent } from './pages/expert/create-expert-page/create-expert-page.component';
import { CreateTagPageComponent } from './pages/tag/create-tag-page/create-tag-page.component';
import { TagComponent } from './components/forms/tag/tag.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ScoreComponent } from './components/score/score.component';
import { ExpertDetailsPageComponent } from './pages/expert/expert-details-page/expert-details-page.component';
import { DetailComponent } from './components/forms/expert/detail/detail.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TagPageComponent,
    ExpertPageComponent,
    TagListComponent,
    ExpertComponent,
    ExpertListComponent,
    PopupComponent,
    HeaderComponent,
    CreateExpertPageComponent,
    CreateTagPageComponent,
    TagComponent,
    SelectorComponent,
    ScoreComponent,
    ExpertDetailsPageComponent,
    DetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
