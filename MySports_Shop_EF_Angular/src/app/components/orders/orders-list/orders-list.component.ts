import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders:Order[]=[];
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.getAllOrders()
    .subscribe({
      next:(orders)=>{
        this.orders=orders;
      },
      error: (response)=>{
        console.log(response);
      }
    })
  }

}
