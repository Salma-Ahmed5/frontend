import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  Details: any = {}; 
  orderId: string = ''; 

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.orderId = params['id'];
      console.log("Order ID from route:", this.orderId); 

      this.fetchOrderDetails();  
    });
  }
  fetchOrderDetails(): void {
    this.http.get<any>(`https://backend-git-salma-ahmed-dev.apps.rm3.7wse.p1.openshiftapps.com/orderdetails/${this.orderId}`).subscribe({
      next: (response) => {
        this.Details = response;
        console.log('Order details fetched:', this.Details); 
      },
      error: (error) => {
        console.error('Error fetching order details:', error);
      }
    });
  }
}
