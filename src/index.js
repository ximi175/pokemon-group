
class Pokemon {
  constructor(name, type, moves, trainer) {
    this.name = name;
    this.trainer = trainer;
    this.type = type;
    this.moves = moves;
    this.hp = 200;
    this.level = this.levelRandom();
    this.damage = 50;
    this.defense = 50;
  }
  levelRandom() {
    return Math.floor(Math.random() * 100) + 1;

  }

  messageAttack(pokemon, type, superName) {
    if (type === 'Super') {
      console.log(`${this.name} de tipo ${this.type} está atacando a ${pokemon.name}
      de tipo ${pokemon.type} con el ataque de tipo ${type} ${superName} y le queda de vida ${pokemon.hp}`);
    } else {
      console.log(`${this.name} de tipo ${this.type} está atacando a ${pokemon.name}
    de tipo ${pokemon.type} con el ataque de tipo ${type} y le queda de vida ${pokemon.hp}`);
    }


  }
  attack(pokemon) {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    if (randomNumber > 15 && randomNumber < 25) {
      let randomMove = Math.floor(Math.random() * 2);
      let superDamage = Object.values(this.moves)[randomMove];
      let superName = Object.keys(this.moves)[randomMove];
      pokemon.hp -= superDamage;
      this.messageAttack(pokemon, 'Super', superName);

    } else {
      const damage = this.calculateDamage(this.type, pokemon.type, this.damage, pokemon.defense);
      pokemon.hp -= damage;
      this.messageAttack(pokemon, 'Normal');
    }
  }

  calculateDamage(yourType, opponentType, attack, defense) {
    const damage = (this.damage + this.level * (attack / defense));
    return damage;
  }
}

class PokemonFuego extends Pokemon {
  constructor(name, moves) {
    super(name, "Fuego", moves);
    this.moves = { ember: 40, flamethrower: 90 };
  }


}

class PokemonAgua extends Pokemon {
  constructor(name, moves) {
    super(name, 'Agua');
    this.moves = { bubble: 40, waterfall: 80 };
    this.damage = 50;
    this.defense = 50;
  }
}

class PokemonElectrico extends Pokemon {
  constructor(name, moves) {
    super(name, "Electrico", moves);
    this.moves = { hunderbolt: 40, thundershock: 90 };
  }
}
class PokemonPlanta extends Pokemon {
  constructor(name, moves) {
    super(name, "Planta", moves);
    this.moves = { absorb: 20, razorLeaf: 55 };
  }
}

const charizard = new PokemonFuego('Charizard');
const squirtle = new PokemonAgua('Squirtle');
const pikachu = new PokemonElectrico('Pikachu');
const bulbasur = new PokemonPlanta('Bulbasur');


squirtle.attack(charizard); // ??
charizard.attack(squirtle); // ??
pikachu.attack(squirtle); // ??
bulbasur.attack(pikachu); // ??

