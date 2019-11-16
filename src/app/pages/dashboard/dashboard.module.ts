import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { BsDatepickerModule } from "ngx-bootstrap";

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


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
export class DashboardModule {}
