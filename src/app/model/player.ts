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
        public attack_lvl: number,
        public defense_lvl: number,
        public size: number,
        public hit_points: number,
    ){}
}
