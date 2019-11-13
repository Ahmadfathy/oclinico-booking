import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [
    trigger('fade',[

      transition(':enter', [
        style({opacity: 0, transform: 'translateY(30px)'}),
        animate(300, style({
          opacity:1, transform: 'translateY(0px)'
        }))
      ]),

      transition(':leave',[
        animate(300, style({
          opacity:1, transform: 'translateY(30px)'
        }))
      ])
    ])
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
