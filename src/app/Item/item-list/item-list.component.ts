import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/Shared/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  itemList: Item[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    let item = new Item(0,"sword","gey",0,0,"","");
    let item1 = new Item(1,"torch","yesterday",0,0,"","");
    this.itemList.push(item);
    this.itemList.push(item1);
    // this.getItems();
  }

  getItems() {
    this.itemService.findAll().subscribe(
      data => {
        this.itemList = data;
      }
    );

  }

}
