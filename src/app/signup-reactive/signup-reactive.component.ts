import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup-reactive',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup-reactive.component.html',
  styleUrl: './signup-reactive.component.css'
})
export class SignupReactiveComponent implements OnInit {
  signupForm!: FormGroup; // Use the non-null assertion operator

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Form Submitted!', this.signupForm.value);
    } else {
      console.log('Form is not valid!');
    }
  }
}