import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/model/monster';
import { MonsterService } from 'src/app/Shared/monster.service';


@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {

  monsterList: Monster[] = [];
  constructor(private monsterService: MonsterService) { }
    
  ngOnInit() {
   let monster = new Monster(0,"Julian","gey",0,0,0,0,"","");
   let monster1 = new Monster(1,"jul","gey",0,0,0,0,"","");
  this.monsterList.push(monster);
  this.monsterList.push(monster1);
  // this.getMonsters();
  }

  getMonsters() {
    this.monsterService.findAll().subscribe(
      data => {
        this.monsterList = data;
      }
    );

  }
}
