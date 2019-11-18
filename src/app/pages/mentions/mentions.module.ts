import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MentionModule } from 'angular-mentions';

import { MentionsRoutingModule } from './mentions-routing.module';
import { MentionsComponent } from './mentions.component';
import { MentionsApiService } from './mentions-api.service';


@NgModule({
  declarations: [MentionsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MentionModule,
    MentionsRoutingModule
  ],
  providers: [MentionsApiService]
})
export class MentionsModule { }
