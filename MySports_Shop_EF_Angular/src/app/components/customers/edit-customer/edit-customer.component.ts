import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerDetails: Customer={
    id:0,
    name:'',
    email:'',
    phone:0,
    item:''

  };

  constructor(private route: ActivatedRoute, private customerService:
    CustomersService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          this.customerService.getCustomer(id)
          .subscribe({
            next:(response)=>{
              this.customerDetails=response;
            }
          });

        }
      }
    })

  }

  updateCustomer(){
    this.customerService.upadteCustomer(this.customerDetails.id, this.customerDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['customers']);
      }
    });
  }
  deleteCustomer(id:number){
     this.customerService.deleteCustomer(id)
     .subscribe({
      next:(response)=>{
        this.router.navigate(['customers']);
      }
     })
  }

}
