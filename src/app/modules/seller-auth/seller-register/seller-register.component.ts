import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.scss'],
})
export class SellerRegisterComponent {
  registrationForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      firstName: ['', [Validators.required]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
    });
  }

  onSubmit() {
    this.isFormSubmitted = true;

    if (this.registrationForm.valid) {
      // Form is valid, proceed with registration logic
      console.log('Form submitted!');
    } else {
      // Form is invalid, show error messages or take appropriate action
      console.log('Invalid form');
    }
  }
}
