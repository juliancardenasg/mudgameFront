import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Decorativeobject } from '../model/decorativeobject';
import { Item } from '../model/item';
import { Monster } from '../model/monster';
import { Player } from '../model/player';
import { Room } from '../model/room';
import { DecorativeObjectService } from '../Shared/decorative-object.service';
import { GameService } from '../Shared/game.service';
import { ItemService } from '../Shared/item.service';
import { MonsterService } from '../Shared/monster.service';
import { RoomService } from '../Shared/room.service';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css'],
})
export class GameDisplayComponent implements OnInit {

  @ViewChild('log') log!: ElementRef;

  items: Item[] = [];
  players: Player[] = [];
  monster: Monster = new Monster(0, '', '', 0, 0, 0, 0, '', '');
  objects: Decorativeobject[] = [];
  player: Player = new Player('', '', 0, 0, 0, 0);
  rooms: Room[] = [];
  backpack: Item[] = [];
  constructor(
    private gameService: GameService,
    private render2: Renderer2 
    // private roomService: RoomService,
    // private decorativeService: DecorativeObjectService,
    // private itemService: ItemService
  ) {}

  ngOnInit(): void {

    this.gameService.loadRoomDecorativeObjects().subscribe((data) => {
      this.objects = data;
    }
    );

    this.gameService.loadRoomItems().subscribe((data) => {
      this.items = data;
    }
    );
    this.gameService.loadRoomPlayer().subscribe((data) => {
      this.players = data;
      this.player = this.players[0];
      console.log(data);
    }
    );
    this.gameService.loadRoomMonster().subscribe((data) => {
      this.monster = data;
    }
    );
    this.gameService.loadRoomPLayerItems().subscribe((data) => {
      this.backpack = data;
    }
    );

  }

  grabItem(item: Item) {

    let log = this.log.nativeElement;
    let div = this.render2.createElement('div');
    let text;

    this.backpack.push(item);
    this.items.splice(this.items.indexOf(item), 1);

    text = this.render2.createText(this.player.name+' has picked up the ' + item.name);
    
    this.render2.appendChild(div, text);
    this.render2.appendChild(log, div);
  }


  dropItem(item: Item) {
    let log = this.log.nativeElement;
    let div = this.render2.createElement('div');
    let text;


    this.backpack.splice(this.backpack.indexOf(item), 1);
    this.items.push(item);

    text = this.render2.createText(this.player.name+' has dropped the ' + item.name);
    
    this.render2.appendChild(div, text);
    this.render2.appendChild(log, div);
  }



  /* game logic*/

  //attack

  attack() {

    let log = this.log.nativeElement;
    let div = this.render2.createElement('div');
    let text;
    
    this.monster.hit_points -= this.player.attack_level;
    text = this.render2.createText(this.player.name + ' has attacked the monster for ' + this.player.attack_level + ' damage');
    if(this.monster.hit_points <= 0) {
      text = this.render2.createText(' You killed the monster');
      this.render2.appendChild(div, text);
      this.render2.appendChild(log, div);
      return;
    }
    
    this.render2.appendChild(div, text);
    this.render2.appendChild(log, div);
    this.reciveDamage(this.monster.attack_lvl);


  }

  reciveDamage(damage: number) {
    let log = this.log.nativeElement;
    let div = this.render2.createElement('div');
    let text;
    this.player.hitpoints -= this.monster.attack_lvl;
    text = this.render2.createText('You recived ' + damage + ' damage');
    this.render2.appendChild(div, text);
    this.render2.appendChild(log, div);
  }

  clearLog() {
    let log = this.log.nativeElement;
    
    while(log.firstChild) {
      log.removeChild(log.firstChild);
    }
  }






}
