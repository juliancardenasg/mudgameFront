import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Create/create/create.component';
import { DecorativeobjectCreateComponent } from './DecorativeObject/decorativeobject-create/decorativeobject-create.component';
import { HomeComponent } from './Home/home/home.component';
import { ItemCreateComponent } from './Item/item-create/item-create.component';
import { Decorativeobject } from './model/decorativeobject';
import { MonsterCreateComponent } from './Monster/monster-create/monster-create.component';
import { MonsterDisplayComponent } from './Monster/monster-display/monster-display.component';
import { RoomCreateComponent } from './Room/room-create/room-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'create', component: CreateComponent, children:[
    { path: 'item', component: ItemCreateComponent },
    { path: 'room', component: RoomCreateComponent },
    { path: 'monster', component: MonsterCreateComponent },
    { path: 'decorativeObject', component: DecorativeobjectCreateComponent },
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
