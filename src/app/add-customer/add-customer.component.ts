import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    alert("Customer Name : " + f.value.customerName + ", Age : " + f.value.age + ", Address : " + f.value.address);
  }

}
