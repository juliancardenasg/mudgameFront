import { Component, OnInit } from '@angular/core';
import { Monster } from '../../model/monster';

@Component({
  selector: 'app-monster-display',
  templateUrl: './monster-display.component.html',
  styleUrls: ['./monster-display.component.css']
})
export class MonsterDisplayComponent implements OnInit {

  monster: Monster = new Monster(0,"Julian","gey",0,0,0,0,"","");

  // constructor(
  //   private monsterService: MonsterService,
  //   private route: ActivatedRoute,
  //   private location: Location
  // ) { }


  ngOnInit(): void {
  }

}
