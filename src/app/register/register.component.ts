import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private http: HttpClient, private router: Router) {}
  onSubmit(registerForm: NgForm) {
    const formData = {
      name: registerForm.value.fullname,
      email: registerForm.value.email,
      phone: registerForm.value.phone,
      password: registerForm.value.password,
      Role: registerForm.value.Role
    };
  
    this.http.post('https://backend-git-salma-ahmed-dev.apps.rm3.7wse.p1.openshiftapps.com/Register', formData).subscribe(
      (response) => {
        alert('Registration successful!');
        this.router.navigate(['/account']);
        sessionStorage.setItem('userDetails', JSON.stringify(response));
        
  
      },
      (error) => {
        alert('Registration failed. Please try again.');
      }
    );
  }
}
