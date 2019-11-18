import { Component, OnInit } from '@angular/core';
import { MentionsApiService } from './mentions-api.service';

@Component({
  selector: "app-mentions",
  templateUrl: "./mentions.component.html",
  styleUrls: ["./mentions.component.css"]
})
export class MentionsComponent implements OnInit {

  diagnosis = [];
  

  constructor(private _mas: MentionsApiService) {}

  ngOnInit() {
    this.getAllDiagnosis();
  }

  getAllDiagnosis() {
    this._mas.getDiagnosis(res => {
      this.diagnosis = res.Diagnosis;
    })
  }

}
