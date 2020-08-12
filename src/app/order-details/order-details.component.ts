import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderdetails: any;

  constructor(private orderservice: LoginServiceService) { }

  ngOnInit(): void {
    this.orderservice.getorderdetails().subscribe(data => {      
      this.orderdetails = data;
    });
  }


}
