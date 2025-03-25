import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  standalone: false
})
export class RegistrationComponent implements OnInit {
  step = 1;

  form = {
    firstName: '',
    lastName: '',
    state: '',
    email: '',
    confirmEmail: '',
    subscribe: false
  };

  states = ['NY', 'CA', 'TX', 'NJ', 'FL'];

  dialogVisible = false;
  dialogTitle = '';
  dialogMessage = '';  

  constructor(private regService: RegistrationService, private router: Router) {}

  ngOnInit(): void {
    console.log('RegistrationComponent initialized');
  }

  showDialog(title: string, message: string) {
    this.dialogTitle = title;
    this.dialogMessage = message;
    this.dialogVisible = true;
  }

  goToStep2(form: any): void {
    // Validate the form first
    if (!form.valid) {
      this.showDialog('Form Error', 'Please fill out all required fields.');
      return;
    }
  
    // Validate email match
    if (this.form.email !== this.form.confirmEmail) {
      this.showDialog('Email Mismatch', 'Email and Confirm Email must match.');
      return;
    }
  
    // Proceed to Step 2
    this.step = 2;
  
    const payload = {
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      state: this.form.state,
      email: this.form.email,
      subscribe: this.form.subscribe
    };
  
    // Make the API call
    this.regService.register(payload).subscribe({
      next: () => {
        this.showDialog('Success', 'Registration successful!');
        this.step = 3;
      },
      error: () => {
        this.showDialog('Registration Failed', 'Something went wrong. Please try again.');
        this.step = 1;
      }
    });
  }
  
}
