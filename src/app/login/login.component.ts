import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(public router: Router) { }

  ngOnInit() {
    document.body.className = 'authentication-bg';
  }

  ngOnDestroy() {
    document.body.className = '';
  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
  }

}
