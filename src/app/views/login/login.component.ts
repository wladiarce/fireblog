import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };
  constructor(private authService: AuthService, private router: Router, private titleService: Title) {
    titleService.setTitle('fireblog - Admin login');
  }

  ngOnInit() {
  }
  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          console.log(res);
          this.router.navigate(['dashboard/home']);
       })
       .catch((err) => console.log('error: ' + err));
  }

}
