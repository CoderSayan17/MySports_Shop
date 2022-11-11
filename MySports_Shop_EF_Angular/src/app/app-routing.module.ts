import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { HomeComponent } from './components/home/home.component';
import { AddItemComponent } from './components/items/add-item/add-item.component';
import { EditItemComponent } from './components/items/edit-item/edit-item.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { EditOrderComponent } from './components/orders/edit-order/edit-order.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'customers',
    component:CustomersListComponent
  },
  {
    path:'customers/add',
    component: AddCustomerComponent
  },
  {
    path: 'customers/edit/:id',
    component:EditCustomerComponent
  },
  {
    path: 'items',
    component:ItemsListComponent
  },
  {
    path:'items/add',
    component:AddItemComponent
  },
  {
    path: 'items/edit/:id',
    component:EditItemComponent
  },
  {
    path: 'orders',
    component:OrdersListComponent
  },
  {
    path:'orders/add',
    component:AddOrderComponent
  },
  {
    path: 'orders/edit/:id',
    component:EditOrderComponent
  },
  {
    path: '#',
    component: HomeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
