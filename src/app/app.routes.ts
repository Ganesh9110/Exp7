import { Routes,RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // Ensure this import is present

import { ReactiveFormsModule } from '@angular/forms';
import { SignupTemplateComponent } from './signup-template/signup-template.component';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
export const routes: Routes = [
    { path: 'signup-template', component: SignupTemplateComponent },
    { path: 'signup-reactive', component: SignupReactiveComponent },
    { path: '', redirectTo: '/signup-template', pathMatch: 'full' },
];

@NgModule({

    imports: [  RouterModule.forRoot([]),
      BrowserModule,
    
      ReactiveFormsModule,
      FormsModule, // Make sure this is imported for template-driven forms
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  })
  export class AppModule {}