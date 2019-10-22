import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { FindingsOverviewComponent } from './manager-view/findings-overview/findings-overview.component';
import { FindingsComponent } from './manager-view/findings-overview/findings/findings.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import { FindingsService } from './services/findings.service';
import {HttpClientModule} from '@angular/common/http';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent,
    ManagerViewComponent,
    FindingsOverviewComponent,
    FindingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    HttpClientModule,
    TableModule,
    MultiSelectModule
  ],
  providers: [FindingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
