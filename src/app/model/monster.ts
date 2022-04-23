
// Model values in backend database
// private int id
// private String name;
// private int attack_lvl;
// private int defense_lvl;
// private int size;
// private int hit_points;
// private String category[];
// private String description;
// private String link;
// private LocalDate lastUpdate;

export class Monster {

    constructor(
        public id: number,
        public name: string,
        public lastUpdate: string,
        public attack_lvl: number,
        public defense_lvl: number,
        public size: number,
        public hit_points: number,
        public description: string,
        public link: string
    ){}



}
