import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup-template',
  standalone: true,
  imports: [FormsModule ,CommonModule,ReactiveFormsModule],
  templateUrl: './signup-template.component.html',
  styleUrl: './signup-template.component.css'
})
export class SignupTemplateComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is not valid!');
    }
  }
}