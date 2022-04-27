import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/model/monster';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor() { }
  roomList: Room[] = [];

  ngOnInit(): void {
    let room = new Room(0,"Room",new Monster(1,"jul","gey",0,0,0,0,"",""));
    let room1 = new Room(1,"Room2",new Monster(0,"Julian","gey",0,0,0,0,"",""));
    this.roomList.push(room);
    this.roomList.push(room1);
  }

}
