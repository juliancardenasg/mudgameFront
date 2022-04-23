import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/model/monster';
@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {

  monsterList: Monster[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
