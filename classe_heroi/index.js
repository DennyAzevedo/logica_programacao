class Hero {
	constructor(name, age, type) {
		this.name = name;
		this.age = age;
		this.type = type;
		this.atackType = this.chosenType(type)
    }

	chosenType(type) {
		switch (type) {
		case "mago":
			return "magia";
		case "guerreiro":
			return "espada";
		case "monge":
			return "artes marciais";
		case "ninja":
			return "shuriken";
		default:
			return "soco";
		}
    }

    atack() {
        return `${this.type} ataca com ${this.atackType}`;
    }
}

let heroEspatan = new Hero("Leonidas", 25, "guerreiro")
let heroShuriken = new Hero("Jyraia", 22, "ninja")

console.log("Inciando a Luta")
console.log(`O ${heroEspatan.name} de ${heroEspatan.age} anos, chegou`);
console.log(`O ${heroShuriken.name} de ${heroShuriken.age} anos, chegou`);
console.log(`${heroEspatan.name} é um ${heroEspatan.type}`);
console.log(`${heroShuriken.name} é um ${heroShuriken.type}, e não gosta de ${heroEspatan.type}`);
console.log(heroEspatan.atack());
console.log(heroShuriken.atack());
