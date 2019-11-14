import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentionsComponent } from './mentions.component';


const routes: Routes = [
  { path: '', component: MentionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentionsRoutingModule { }
