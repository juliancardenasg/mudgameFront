import { Component, OnInit } from '@angular/core';
import { Decorativeobject } from '../model/decorativeobject';
import { Item } from '../model/item';
import { Monster } from '../model/monster';
import { Player } from '../model/player';
import { Room } from '../model/room';
import { DecorativeObjectService } from '../Shared/decorative-object.service';
import { ItemService } from '../Shared/item.service';
import { MonsterService } from '../Shared/monster.service';
import { RoomService } from '../Shared/room.service';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css'],
})
export class GameDisplayComponent implements OnInit {
  items: Item[] = [];
  players: Player[] = [];
  monster: Monster = new Monster(0, '', '', 0, 0, 0, 0, '', '');
  objects: Decorativeobject[] = [];
  player: Player = new Player('', '', 0, 0, 0, 0);
  rooms: Room[] = [];
  constructor(
    private roomService: RoomService,
    private decorativeService: DecorativeObjectService,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.itemService.findAll().subscribe((data) => {
      this.items = data;
    });

    this.decorativeService.findAll().subscribe((data) => {
      this.objects = data;
    });
  }
}
