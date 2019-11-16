import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [PagesComponent, ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    TranslateModule,
  ]
})
export class PagesModule {}
