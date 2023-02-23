export class Trainer {
  constructor(name, inventory, gymLeader, gymType, capturedPokemons) {
    this.name = name;
    this.inventory = inventory || [];
    this.gymLeader = gymLeader || null;
    this.gymType = gymType || null;
    this.capturedPokemons = [];
  }

  capturePokemon(pokemon) {
    if (!this.capturePokemon.includes(pokemon)) {
      this.capturePokemon.push(pokemon);
      pokemon.setEntrenador(this);
    } else {
      console.log(`${this.nombre} ya tiene a ${pokemon.nombre}`);
    }
  }

  healthPokemon(pokemon) {
    if (this.inventory.includes("pocion")) {
      pokemon.cure(10);
      console.log(`${pokemon.nombre} ha sido curado por ${this.name}`);
    } else if (this.inventory.includes("superpocion")) {
      pokemon.curar(20);
      console.log(`${pokemon.nombre} ha sido curado por ${this.name}`);
    } else {
      console.log(
        `${this.name} no tiene pociones para curar a ${pokemon.name}`
      );
    }
  }

  addTrainerGym(gymName, gymType) {
    if (this.gymLeader === gymName) {
      console.log(
        `El entrenador ${this.name} ya es el Lider del gimnasio ${gymName} de tipo ${gymType}`
      );
    } else {
      this.gymLeader = gymName;
      console.log(
        `El entrenador ${this.name} acaba de convertirse en lider de el gimnasio ${gymName} de tipo ${gymType}`
      );
    }
  }
}
