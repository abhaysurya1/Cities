import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    destination: ''
  };

  registrationSuccess = false; 

  onSubmit(registerForm: any) {
    if (registerForm.valid) {
      console.log('Form Submitted', this.user);
      this.registrationSuccess = true; 
      registerForm.reset(); 
      
      
      setTimeout(() => {
        this.registrationSuccess = false;
      }, 3000);
    }
  }
}


