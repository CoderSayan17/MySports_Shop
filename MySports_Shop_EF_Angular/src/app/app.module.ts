import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';

import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { EditItemComponent } from './components/items/edit-item/edit-item.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { EditOrderComponent } from './components/orders/edit-order/edit-order.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    
    AddCustomerComponent,
    EditCustomerComponent,
    ItemsListComponent,
    AddItemComponent,
    EditItemComponent,
  
    OrdersListComponent,
       AddOrderComponent,
       EditOrderComponent,
       HomeComponent,
     
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
