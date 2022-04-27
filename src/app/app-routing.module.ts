import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Create/create/create.component';
import { DecorativeobjectCreateComponent } from './DecorativeObject/decorativeobject-create/decorativeobject-create.component';
import { DecorativeobjectDisplayComponent } from './DecorativeObject/decorativeobject-display/decorativeobject-display.component';
import { DecorativeobjectListComponent } from './DecorativeObject/decorativeobject-list/decorativeobject-list.component';
import { DecorativeobjectViewComponent } from './DecorativeObject/decorativeobject-view/decorativeobject-view.component';
import { HomeComponent } from './Home/home/home.component';
import { ItemCreateComponent } from './Item/item-create/item-create.component';
import { ItemDisplayComponent } from './Item/item-display/item-display.component';
import { ItemListComponent } from './Item/item-list/item-list.component';
import { ItemViewComponent } from './Item/item-view/item-view.component';
import { MenuDecorativeObjectComponent } from './Menu/menu-decorative-object/menu-decorative-object.component';
import { MenuItemComponent } from './Menu/menu-item/menu-item.component';
import { MenuMonsterComponent } from './Menu/menu-monster/menu-monster.component';
import { MenuRoomComponent } from './Menu/menu-room/menu-room.component';
import { Decorativeobject } from './model/decorativeobject';
import { MonsterCreateComponent } from './Monster/monster-create/monster-create.component';
import { MonsterDisplayComponent } from './Monster/monster-display/monster-display.component';
import { MonsterListComponent } from './Monster/monster-list/monster-list.component';
import { MonsterViewComponent } from './Monster/monster-view/monster-view.component';
import { RoomCreateComponent } from './Room/room-create/room-create.component';
import { RoomDisplayComponent } from './Room/room-display/room-display.component';
import { RoomListComponent } from './Room/room-list/room-list.component';
import { RoomViewComponent } from './Room/room-view/room-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'create', component: CreateComponent, children:[

    { path: 'menuRoom', component: MenuRoomComponent, children:[
      { path: 'create', component: RoomCreateComponent },
      { path: 'display', component: RoomDisplayComponent },
      { path: 'list', component: RoomListComponent },
      { path: 'view', component: RoomViewComponent }]},

    { path: 'menuMonster', component: MenuMonsterComponent, children:[
      { path: 'create', component: MonsterCreateComponent },
      { path: 'display/:id', component: MonsterDisplayComponent },
      { path: 'list', component: MonsterListComponent },
      { path: 'view', component: MonsterViewComponent }]},
      
    { path: 'menuItem', component: MenuItemComponent, children:[
      { path: 'create', component: ItemCreateComponent },
      { path: 'display/:id', component: ItemDisplayComponent },
      { path: 'list', component: ItemListComponent },
      { path: 'view', component: ItemViewComponent },
    ]},
      
    { path: 'menuDecorativeObject', component: MenuDecorativeObjectComponent, children:[
      { path: 'create', component: DecorativeobjectCreateComponent },
      { path: 'display', component: DecorativeobjectDisplayComponent },
      { path: 'list', component: DecorativeobjectListComponent },
      { path: 'view', component: DecorativeobjectViewComponent }]},
  
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
