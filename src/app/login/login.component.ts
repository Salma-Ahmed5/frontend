import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  userDetails: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  onLogin(loginForm: NgForm) {
    const email = loginForm.value.email;
    const password = loginForm.value.password;

    this.http.get(`http://localhost:5050/login/${email}`).subscribe(
      (response) => {
       
        sessionStorage.setItem('userEmail', email);  
        sessionStorage.setItem('userDetails', JSON.stringify(response));  
        console.log("Login successful, redirecting...");
        this.router.navigate(['/account']); 
      },
      (error) => {
        alert('Login failed. Please try again.');
        console.log('Error:', error);
      }
    );
  }
}
