class Inventory {
  constructor(healItem, pokemon) {
    this.healItem = [];
    this.pokemon = [];
  }

  getItems() {
    if (this.healItem[0]) {
      console.log("You carry:");
      this.healItem.forEach(inventory => {
        console.log(` ${inventory.name}`);
      });
      return true;
    } else {
      console.log("The inventory is empty");
      return false;
    }
  }

  addPokemon(name, type) {
    this.pokemon.push({
      name,
      type,
    });
    return this.pokemon.length;
  }

  addItem(name, heal) {
    this.healItem.push({
      name,
      heal,
    });
    return this.healItem.length;
  }

  removeItem(name) {
    this.healItem.forEach(inventory => {
      if (name == inventory.name) {
        this.healItem.pop(inventory.desc);
        return true;
      } else {
        return false;
      }
    });
  }

  removePokemon(name) {
    this.pokemon.forEach(inventory => {
      if (name == inventory.name) {
        this.pokemon.pop(inventory.name);
        return true;
      } else {
        return false;
      }
    });
  }
}

class BackPack extends Inventory {
  addItem(name, heal) {
    this.size = 10;
    this.total = this.pokemon.length + this.healItem.length;
    if (this.total == this.size) {
      console.log("Inventary is full");
      return false;
    } else {
      super.addItem(name, heal);
      return true;
    }
  }
}

// const player = new BackPack();
// player.addItem("potion", "10");
// player.getItems();
