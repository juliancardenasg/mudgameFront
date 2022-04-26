import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterService } from 'src/app/Shared/monster.service';
import { Monster } from '../../model/monster';


@Component({
  selector: 'app-monster-display',
  templateUrl: './monster-display.component.html',
  styleUrls: ['./monster-display.component.css']
})
export class MonsterDisplayComponent implements OnInit {

  monster: Monster = new Monster(0,"Julian","gey",0,0,0,0,"","");

  constructor(
    private monsterService: MonsterService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {


    this.route.paramMap.subscribe((params) => {

      let id = +params.get("id")!;
      this.monsterService.findById(id).subscribe((received) => {
        this.monster = received;
    
      });

    });

  }

}
