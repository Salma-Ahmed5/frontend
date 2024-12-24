import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-system-orders',
  templateUrl: './all-system-orders.component.html',
  styleUrls: ['./all-system-orders.component.css']
})
export class AllSystemOrdersComponent implements OnInit {

  allOrders: any[] = [];
  couriers: any[] = [];
  allUsers: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const storedOrders = sessionStorage.getItem('AllOrders');

      this.http.get<any[]>('https://backend-git-salma-ahmed-dev.apps.rm3.7wse.p1.openshiftapps.com/AllOrders').subscribe(
        (response) => {
          this.allOrders = response; 
          sessionStorage.setItem('AllOrders', JSON.stringify(response)); 
          console.log('Fetched orders successfully');
        },
        (error) => {
          alert('Failed to fetch orders');
          console.log('Error:', error);
        }
      );


      this.http.get<any[]>('https://backend-git-salma-ahmed-dev.apps.rm3.7wse.p1.openshiftapps.com/AllUsers').subscribe(
        (response) => {
          this.allUsers = response;
          for (let i = 0; i < this.allUsers.length; i++) {
            if (this.allUsers[i].schemaRole === 'Courier') {
              this.couriers.push(this.allUsers[i].schemaName);  
            }
            else{
              continue;
            }

          }
        },
        (error) => {
          alert('Failed to fetch users');
          console.error('Error fetching users:', error);
        }
      );
    }

    

    updateOrderStatus(orderId: string, NewStatus: string): void {

      this.http.put(`https://backend-git-salma-ahmed-dev.apps.rm3.7wse.p1.openshiftapps.com/UpdateStatus/${orderId}/${NewStatus}`, {}).subscribe(
        (response) => {

          alert(`Courier ${NewStatus} assigned to order ${orderId} successfully.`);
          
        },
        (error) => {
          alert('Failed to assign courier');
          console.error('Error:', error);
        }
      );
    }



    assignCourier(orderId: string, name: string): void {

      this.http.put(`https://backend-git-salma-ahmed-dev.apps.rm3.7wse.p1.openshiftapps.com/AssignCourier/${orderId}/${name}`, {}).subscribe(
        (response) => {

          alert(`Courier ${name} assigned to order ${orderId} successfully.`);
          
        },
        (error) => {
          alert('Failed to assign courier');
          console.error('Error:', error);
        }
      );
    }


    DeleteOrder(orderId:String) : void {

      this.http.delete(`https://backend-git-salma-ahmed-dev.apps.rm3.7wse.p1.openshiftapps.com/DeleteOrder/${orderId}`).subscribe(
        () => {
          
          alert('order deleted');
         
        },
        (error) => {
          alert('Failed to delete order');
         
        }
      );
    }
  
  
  }





  

