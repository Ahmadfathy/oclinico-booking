import { Component, OnInit } from '@angular/core';
import { MentionsApiService } from './mentions-api.service';

import { Diagnosis } from './classes/diagnosis';

@Component({
  selector: "app-mentions",
  templateUrl: "./mentions.component.html",
  styleUrls: ["./mentions.component.css"]
})
export class MentionsComponent implements OnInit {
  items: any[] = [
    { tag: "sqrt" },
    { tag: "exp" },
    { tag: "root" },
    { tag: "and" }
  ];

  lstDiagnosis: Diagnosis[];
  objPOsts: Diagnosis;

  constructor(private _mas: MentionsApiService) {}

  ngOnInit() {
    // this._mas.getDiagnosis(data => { this.lstDiagnosis = data })
    var opost = new Diagnosis();
    opost.title = "testbody";
    opost.body = "testbody";

    this._mas.post(opost).subscribe(data => {this.objPOsts = data});
  }
}
