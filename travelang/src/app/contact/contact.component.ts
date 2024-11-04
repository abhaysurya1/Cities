import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactusComponent implements OnInit {
  contactForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      message: ['', [Validators.required, Validators.minLength(10)]], 
    });
  }
 
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Message Sent Successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}


 