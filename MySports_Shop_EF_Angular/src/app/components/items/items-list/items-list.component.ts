import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items : Item[] =[];
  
  enteredSearchValue: string='';

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.itemsService.getAllItems()
    .subscribe({
      next:(items)=>{
        this.items=items;
      },
      error:(response) =>{
        console.log(response);
      }
    })
  }

  



}
