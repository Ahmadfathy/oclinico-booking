import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {

  items: any[] = [
    { tag: 'sqrt'},
    { tag: 'exp'},
    { tag: 'root'},
    { tag: 'and'}];

  constructor() { }

  ngOnInit() {
  }

}
