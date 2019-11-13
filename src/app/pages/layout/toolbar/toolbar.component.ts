import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLang(language: string) {
    this.translate.use(language);
    document.dir = language == "ar" ? "rtl" : "ltr";
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
  }

}
