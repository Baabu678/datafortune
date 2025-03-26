import { Component } from '@angular/core';
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
  isSubmitting = false;
  showConfirmation: boolean = false;

  constructor(private regService: RegistrationService) {}

  showDialog(title: string, message: string): void {
    this.dialogTitle = title;
    this.dialogMessage = message;
    this.dialogVisible = true;
  }

  submitRegistrationForm(form: any): void {
    if (!form.valid) {
      this.showDialog('Validation Error', 'Please fill out all required fields correctly.');
      return;
    }

    if (this.form.email !== this.form.confirmEmail) {
      this.showDialog('Email Mismatch', 'Email and Confirm Email must match.');
      return;
    }
    const payload = {
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      state: this.form.state,
      email: this.form.email,
      subscribe: this.form.subscribe
    };

    this.isSubmitting = true;
    this.currentStep = 2; // SUBMITTING stage
    
    this.regService.register(payload).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.currentStep = 3; // Show confirmation only now
      },
      error: () => {
        this.isSubmitting = false;
        this.currentStep = 1; // Back to form
        this.showDialog('Registration Failed', 'Something went wrong. Please try again.');
      }
    });
  }

  // prevent form from submitting on Enter key in dropdown
  handleEnterKey(event: KeyboardEvent): void {
    const tag = (event.target as HTMLElement).tagName.toLowerCase();
    if (event.key === 'Enter' && (tag === 'select' || tag === 'option')) {
      event.preventDefault();
    }
  }
}
