import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/model/monster';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-room-display',
  templateUrl: './room-display.component.html',
  styleUrls: ['./room-display.component.css']
})
export class RoomDisplayComponent implements OnInit {

  room: Room = new Room(0,"one",new Monster(0,"Julian","gey",0,0,0,0,"",""));
  constructor() { }

  ngOnInit(): void {
  }

}
