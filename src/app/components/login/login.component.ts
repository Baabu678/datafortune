import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  password = '';
  passwordError = false;
  private sharedPassword = 'Speak2025'; // You can change it

  constructor(private router: Router) {}
  ngOnInit() {
    console.log('LoginComponent initialized');
  }
  onLogin() {
    if (this.password === this.sharedPassword) {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/register']);
    } else {
      this.passwordError = true;
    }
  }
}
