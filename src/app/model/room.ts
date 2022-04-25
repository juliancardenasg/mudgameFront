import { Monster } from "./monster";
import { Decorativeobject } from "./decorativeobject";
import { Player } from "./player";
import { Item } from "./item";

export class Room {

    public decorativeObjectList: Decorativeobject[] = [];
    public itemList: Item[] = [];
    public monsterList: Monster[] = [];

    constructor(
        public id: number,
        public name: string,
        public monster: Monster,
    ){}
}
