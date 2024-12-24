import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {
  useremail: string = '';

  constructor(private http: HttpClient, private router: Router) {}//hena

  ngOnInit(): void {
    const userDetails = JSON.parse(sessionStorage.getItem('userDetails') || '{}');
    console.log("Retrieved userDetails from session:", userDetails); // Debug
    this.useremail = userDetails.schemaEmail;
  
    if (!this.useremail) {
      console.warn("No user email found, navigating to login.");
      this.router.navigate(['/login']); 
    }
  }
  
  onSubmit(orderForm: NgForm) {
    if (orderForm.valid) {
     
      const formData = {
        status:'pending',
        pickup: orderForm.value.pickup,
        dropoff: orderForm.value.dropoff,  
        type: orderForm.value.type,
        weight: orderForm.value.weight,
        extradetails: orderForm.value.extradetails,
        courier: 'unassigned',
        userEmail: this.useremail,  
      };

      this.http.post('http://localhost:5050/createorder', formData).subscribe({
        next: (response) => {
          alert("Order created successfully!");
          
          this.router.navigate(['/myorders']);
          
       
        },
        error: (error) => {
          console.error("Error creating order:", error);
          alert("Order creation failed. Please try again.");
        }
      });
    } else {
      alert("Please fill in all required fields.");
    }
  }
}
