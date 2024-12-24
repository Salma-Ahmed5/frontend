import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userDetails: any = null;

  ngOnInit(): void {
    
    const storedUserDetails = sessionStorage.getItem('userDetails');
    
    if (storedUserDetails) {
     
      this.userDetails = JSON.parse(storedUserDetails);
      console.log(this.userDetails);
    } else {
      console.error('No user details found. Please log in first.');
    }
  }
}
