import { Component, OnInit } from '@angular/core';
import { Decorativeobject } from 'src/app/model/decorativeobject';

@Component({
  selector: 'app-decorativeobject-list',
  templateUrl: './decorativeobject-list.component.html',
  styleUrls: ['./decorativeobject-list.component.css'],
})
export class DecorativeobjectListComponent implements OnInit {
  decorativeObjectList: Decorativeobject[] = [];
  constructor(private decorativeObjectService: Decorativeobject) {}

  ngOnInit(): void {
    let decoObj = new Decorativeobject('sword', 1);
    let decoObj1 = new Decorativeobject('frame', 2);
    this.decorativeObjectList.push(decoObj);
    this.decorativeObjectList.push(decoObj1);
  }
}
