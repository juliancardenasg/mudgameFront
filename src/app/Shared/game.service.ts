import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../model/item';
import { Monster } from '../model/monster';
import { Player } from '../model/player';
import { Decorativeobject } from '../model/decorativeobject';
@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }
  
loadRoomItems(): Observable<Item[]>{
  return this.http.get<Item[]>('http://localhost:8090/game/items');
}

loadRoomMonster(): Observable<Monster>{
  return this.http.get<Monster>('http://localhost:8090/game/monsters');
}

loadRoomPlayer(): Observable<Player[]>{
  return this.http.get<Player[]>('http://localhost:8090/game/players');
}
loadRoomDecorativeObjects(): Observable<Decorativeobject[]>{
  return this.http.get<Decorativeobject[]>('http://localhost:8090/game/objetos');
}

loadRoomPLayerItems(): Observable<Item[]>{
  return this.http.get<Item[]>('http://localhost:8090/game/playeritems');
}

}