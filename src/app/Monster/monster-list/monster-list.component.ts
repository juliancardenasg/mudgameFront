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
    
  ngOnInit(): void {
    this.getMonsters();
  }

  getMonsters(): void {
    this.monsterService.findAll().subscribe(
      data => {
        this.monsterList = data;
      }
    );

  }
}
