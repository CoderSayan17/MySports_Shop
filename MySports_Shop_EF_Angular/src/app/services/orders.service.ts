import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.baseApiUrl+'/api/orders');
   }

   addOrder(addOrderRequest:Order): Observable<Order>{
  
    return this.http.post<Order>(this.baseApiUrl+'/api/orders',addOrderRequest);
  }
  getOrder(id:string):Observable<Order>{
  
    return this.http.get<Order>(this.baseApiUrl+'/api/orders/'+id);
  }

  upadteOrder(id:number, updateOrderRequest:Order): Observable<Order>{
    return this.http.put<Order>(this.baseApiUrl + '/api/orders/' + id, updateOrderRequest);
  }
  
  deleteOrder(id:number):Observable<Order>{
    return this.http.delete<Order>(this.baseApiUrl+'/api/orders/'+id);
  }

}
