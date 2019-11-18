import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs'
// import { Diagnosis } from "./classes/diagnosis";

interface Diagnosis {
  ID?: number;
  Code?: string;
  Name?: string;
}


@Injectable({
  providedIn: "root"
})
export class MentionsApiService {
  constructor(private _httpClient: HttpClient) {}

  getDiagnosis(callback){
    return this._httpClient.post("https://api.oclinico.com/PharmacyAPI/api/medical-diagnosis/get-all-medical-diagnosis/S", {})
      .subscribe((data) => {
        callback(data);
    });
  }

  /*
  post(opost: Diagnosis): Observable<any> {
    return this._httpClient.post(
      "https://jsonplaceholder.typicode.com/posts",
      opost
    );
  }
  */ 
}
