import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionModule } from 'angular-mentions';

import { MentionsRoutingModule } from './mentions-routing.module';
import { MentionsComponent } from './mentions.component'


@NgModule({
  declarations: [MentionsComponent],
  imports: [
    CommonModule,
    MentionModule,
    MentionsRoutingModule
  ]
})
export class MentionsModule { }
