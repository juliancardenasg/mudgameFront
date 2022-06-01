// Model values in backend database
// private String name;
// private String lastUpdate;
// private int attack_lvl;
// private int defense_lvl;
// private int size;
// private int hit_points;

export class Player {

    constructor(
        public name: string,
        public lastUpdate: string,
        public attack_level: number,
        public defense_level: number,
        public size: number,
        public hitpoints: number,
    ){}
}
