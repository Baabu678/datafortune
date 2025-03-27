import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../../shared/dialog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent {
  password = '';
  private sharedPassword = 'Speak2025';

  constructor(private router: Router, private dialogService: DialogService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      this.dialogService.showDialog('Validation Error', 'Password is required.');
      return;
    }

    if (this.password === this.sharedPassword) {
      sessionStorage.setItem('authenticated', 'true');
      this.router.navigate(['/register']);
    } else {
      this.dialogService.showDialog('Invalid Password', 'The password you entered is incorrect.');
    }
  }
}
