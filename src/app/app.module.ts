import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterViewComponent } from './Monster/monster-view/monster-view.component';
import { MonsterCreateComponent } from './Monster/monster-create/monster-create.component';
import { MonsterDisplayComponent } from './Monster/monster-display/monster-display.component';
import { MonsterListComponent } from './Monster/monster-list/monster-list.component';
import { DecorativeobjectCreateComponent } from './DecorativeObject/decorativeobject-create/decorativeobject-create.component';
import { DecorativeobjectDisplayComponent } from './DecorativeObject/decorativeobject-display/decorativeobject-display.component';
import { DecorativeobjectListComponent } from './DecorativeObject/decorativeobject-list/decorativeobject-list.component';
import { DecorativeobjectViewComponent } from './DecorativeObject/decorativeobject-view/decorativeobject-view.component';
import { ItemCreateComponent } from './Item/item-create/item-create.component';
import { ItemDisplayComponent } from './Item/item-display/item-display.component';
import { ItemListComponent } from './Item/item-list/item-list.component';
import { ItemViewComponent } from './Item/item-view/item-view.component';
import { PlayerCreateComponent } from './Player/player-create/player-create.component';
import { PlayerDisplayComponent } from './Player/player-display/player-display.component';
import { PlayerListComponent } from './Player/player-list/player-list.component';
import { PlayerViewComponent } from './Player/player-view/player-view.component';
import { RoomCreateComponent } from './Room/room-create/room-create.component';
import { RoomDisplayComponent } from './Room/room-display/room-display.component';
import { RoomListComponent } from './Room/room-list/room-list.component';
import { RoomViewComponent } from './Room/room-view/room-view.component';
import { HomeComponent } from './Home/home/home.component';
import { CreateComponent } from './Create/create/create.component';
import { MenuMonsterComponent } from './Menu/menu-monster/menu-monster.component';
import { MenuRoomComponent } from './Menu/menu-room/menu-room.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterViewComponent,
    MonsterCreateComponent,
    MonsterDisplayComponent,
    MonsterListComponent,
    DecorativeobjectCreateComponent,
    DecorativeobjectDisplayComponent,
    DecorativeobjectListComponent,
    DecorativeobjectViewComponent,
    ItemCreateComponent,
    ItemDisplayComponent,
    ItemListComponent,
    ItemViewComponent,
    PlayerCreateComponent,
    PlayerDisplayComponent,
    PlayerListComponent,
    PlayerViewComponent,
    RoomCreateComponent,
    RoomDisplayComponent,
    RoomListComponent,
    RoomViewComponent,
    HomeComponent,
    CreateComponent,
    MenuMonsterComponent,
    MenuRoomComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
