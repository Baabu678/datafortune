import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  standalone: false
})
export class RegistrationComponent {
  currentStep = 1;

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

  constructor(private regService: RegistrationService) {}

  showDialog(title: string, message: string) {
    this.dialogTitle = title;
    this.dialogMessage = message;
    this.dialogVisible = true;
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      this.showDialog('Validation Error', 'Please fill out all required fields correctly.');
      return;
    }

    if (this.form.email !== this.form.confirmEmail) {
      this.showDialog('Email Mismatch', 'Email and Confirm Email must match.');
      return;
    }

    this.currentStep = 2;

    const payload = {
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      state: this.form.state,
      email: this.form.email,
      subscribe: this.form.subscribe
    };

    this.regService.register(payload).subscribe({
      next: () => {
        this.showDialog('Success', 'Registration successful!');
        this.currentStep = 3;
      },
      error: () => {
        this.showDialog('Error', 'Something went wrong. Please try again.');
        this.currentStep = 1;
      }
    });
  }
}
