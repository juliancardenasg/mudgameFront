import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Create/create/create.component';
import { DecorativeobjectCreateComponent } from './DecorativeObject/decorativeobject-create/decorativeobject-create.component';
import { HomeComponent } from './Home/home/home.component';
import { ItemCreateComponent } from './Item/item-create/item-create.component';
import { MenuMonsterComponent } from './Menu/menu-monster/menu-monster.component';
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

    { path: 'menuRoom', component: RoomCreateComponent, children:[
      { path: 'create', component: RoomCreateComponent },
      { path: 'display', component: RoomDisplayComponent },
      { path: 'list', component: RoomListComponent },
      { path: 'view', component: RoomViewComponent },
    ]},


    { path: 'menuMonster', component: MenuMonsterComponent, children:[
      { path: 'display', component: MonsterDisplayComponent },
      { path: 'list', component: MonsterListComponent },
      { path: 'view', component: MonsterViewComponent }]},
  ]},

  { path: 'item', component: ItemCreateComponent },


  { path: 'decorativeobject', component: DecorativeobjectCreateComponent },


  { path: 'room', component: RoomCreateComponent },
];
//{path: 'admin', component: Admi}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
