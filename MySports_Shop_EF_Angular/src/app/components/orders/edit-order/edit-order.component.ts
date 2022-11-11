import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  orderDetails: Order={
    id:0,
    name:'',
    item:'',
    pip:0,
    quantity:0,
    totalprice:''

  };
  customerService: any;

  constructor(private route: ActivatedRoute, private orderService:
    OrdersService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id');

        if(id){
          this.orderService.getOrder(id)
          .subscribe({
            next:(response)=>{
              this.orderDetails=response;
            }
          });

        }
      }
    })
  }

  updateOrder(){
    this.orderService.upadteOrder(this.orderDetails.id, this.orderDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['orders']);
      }
    });
  }
  deleteOrder(id:number){
     this.orderService.deleteOrder(id)
     .subscribe({
      next:(response)=>{
        this.router.navigate(['orders']);
      }
     })
  }




}
