import { Monster } from "./monster";

export class Room {
    constructor(
        public id: number,
        public name: string,
        public monster: Monster,
    ){}
}
