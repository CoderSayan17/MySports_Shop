import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  addOrderRequest:Order={
    id:0,
    name:'',
    item:'',
    pip:0,
    quantity:0,
    totalprice:''
  };



  constructor(private orderService: OrdersService, private router:Router) { }

  ngOnInit(): void {
  }

  addOrder(){
    this.orderService.addOrder(this.addOrderRequest)
    .subscribe({
      next:(order)=>{
        this.router.navigate(['orders']);
      }
    });
  }

}
