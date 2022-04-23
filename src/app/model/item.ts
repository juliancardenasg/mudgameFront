// Model values in backend database
// private String name;
// private LocalDate lastUpdate;
// private int cost;
// private double weight;
// private String examine;
// private String websiteUrl;

export class Item {

constructor(
    public id: number,
    public name: string,
    public lastUpdate: string,
    public cost: number,
    public weight: number,
    public examine: string,
    public websiteUrl: string
){}

}

