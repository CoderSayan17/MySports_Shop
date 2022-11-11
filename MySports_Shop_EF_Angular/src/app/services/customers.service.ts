import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

   baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getAllCustomers():Observable<Customer[]>{
   return this.http.get<Customer[]>(this.baseApiUrl+'/api/customers');
  }

  addCustomer(addCustomerRequest:Customer): Observable<Customer>{
  
    return this.http.post<Customer>(this.baseApiUrl+'/api/customers',addCustomerRequest);
  }

  getCustomer(id:string):Observable<Customer>{
  
    return this.http.get<Customer>(this.baseApiUrl+'/api/customers/'+id);
  }

  upadteCustomer(id:number, updateCustomerRequest:Customer): Observable<Customer>{
    return this.http.put<Customer>(this.baseApiUrl + '/api/customers/' + id, updateCustomerRequest);
  }
  
  deleteCustomer(id:number):Observable<Customer>{
    return this.http.delete<Customer>(this.baseApiUrl+'/api/customers/'+id);
  }
}
