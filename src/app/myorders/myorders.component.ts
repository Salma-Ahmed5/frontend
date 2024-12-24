import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  orders: any[] = [];
  isLoading: boolean = true; 
  errorMessage: string = '';  

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const userEmail = sessionStorage.getItem('userEmail'); 

    if (!userEmail) {
      console.log('No user email found in sessionStorage');
      this.router.navigate(['/login']);  
    } else {
      this.http.get<any[]>(`https://backend-git-salma-ahmed-dev.apps.rm3.7wse.p1.openshiftapps.com/getorders?email=${userEmail}`).subscribe({
        next: (data) => {
          this.orders = data.map(order => ({
            _id: order._id,
            status: order.status
          }));
          this.isLoading = false;  
          console.log('Orders fetched:', this.orders); 
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = 'Error fetching orders. Please try again later.';  
          console.error('Error fetching orders:', error);
        }
      });
    }
  }

  goToOrderDetails(orderId: string): void {
    this.router.navigate([`/order-details/${orderId}`]);
    console.log("Navigating to order details with ID:", orderId); 
  }
}
