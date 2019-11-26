import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { BsDatepickerModule } from "ngx-bootstrap";
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { arLocale } from 'ngx-bootstrap/locale';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

defineLocale('ar', arLocale);

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgbModule,
    MatTableModule,
    DashboardRoutingModule,
    BsDatepickerModule.forRoot()
  ]
})
export class DashboardModule {
  constructor(
    private bsLocaleService: BsLocaleService
  ) {
    this.bsLocaleService.use('ar');
  }
}
