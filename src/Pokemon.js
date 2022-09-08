export default class Pokemon {
static properties = {
    size: { label: 'Größe', unit: 'm' },
    weight: { label: 'Gewicht', unit: 'kg' },
    attack: { label: 'Angriff', unit: '' },
    defense: { label: 'Verteidigung', unit: '' },
    speed: { label: 'Geschwindigkeit', unit: 'km/h' },
};

    constructor(name, image, size, weight, attack, defense, speed) {
        this.name = name;
        this.image = image;
        this.size = size;
        this.weight = weight;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }
}
