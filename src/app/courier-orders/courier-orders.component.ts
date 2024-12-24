import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courier-orders',
  templateUrl: './courier-orders.component.html',
  styleUrls: ['./courier-orders.component.css']
})
export class CourierOrdersComponent implements OnInit{

  allOrders: any[] = [];
  couriers: any[] = [];
  allUsers: any = null;
  userDetails: any = null;
  AssignOrders: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const storedOrders = sessionStorage.getItem('AllOrders');

      this.http.get<any[]>('http://localhost:5050/AllOrders').subscribe(
        (response) => {
          this.allOrders = response; 
          
          sessionStorage.setItem('AllOrders', JSON.stringify(response)); 
          const storedUserDetails = sessionStorage.getItem('userDetails');
          if (storedUserDetails) {
      this.userDetails = JSON.parse(storedUserDetails);

    } else {
      console.error('No user details found. Please log in first.');
    }
          
          for (let i = 0; i < this.allOrders.length; i++) {
            if (this.allOrders[i].schemacourier === this.userDetails.schemaName) {
              this.AssignOrders.push(this.allOrders[i]);   
            }
            else{
              continue;
            }
          }
        },
        (error) => {
          alert('Failed to fetch orders');
          console.log('Error:', error);
        }
      );

    }


    updateOrderStatus(orderId: string, NewStatus: string): void {

      this.http.put(`http://localhost:5050/UpdateStatus/${orderId}/${NewStatus}`, {}).subscribe(
        (response) => {

          alert(`Courier ${NewStatus} assigned to order ${orderId} successfully.`);
          
        },
        (error) => {
          alert('Failed to assign courier');
          console.error('Error:', error);
        }
      );
    }





  

}
