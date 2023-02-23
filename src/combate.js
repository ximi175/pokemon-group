const entrenador1 = {
    nombre: "Ash",
    pokemon: ["Pikachu","Charmander","Squirtle"]
};

const entrenador2 = {
    nombre: "Gary",
    pokemon: ["Blastoise","Nidoking","Arcaine"]
}

//Simulación de batalla

let turno = 1;
let pokemon1 = entrenador1.pokemon[0];
let pokemon2 = entrenador2.pokemon[0];

while(pokemon1 && pokemon2){
    console.log(`Turno ${turno}: ${entrenador1.nombre} envía a ${pokemon1} y ${entrenador2.nombre} envía a ${pokemon2}`);
    const accion1 = Math.random();
    if(accion1<0.6){
        console.log(`${pokemon1} usa ataque normal`);
    }else if(accion1<0.9){
        const ataque = Math.random() < 0.5 ? "ataque especial 1" : "ataque especial 2";
        console.log(`${pokemon1} usa ${ataque}`);
    }else{
        const item = Math.random() < 0.5 ? "poción" : "superpoción";
        console.log(`${entrenador1.nombre} usa ${item} en ${pokemon1}`);
    }

    //Acción del Pokémon del segundo entrenador
    const accion2 = Math.random();
    if (accion2 < 0.6) {
      console.log(`${pokemon2} usa ataque normal`);
    } else if (accion2 < 0.9) {
      const ataque = Math.random() < 0.5 ? "ataque especial 1" : "ataque especial 2";
      console.log(`${pokemon2} usa ${ataque}`);
    } else {
      const item = Math.random() < 0.5 ? "poción" : "superpoción";
      console.log(`${entrenador2.nombre} usa ${item} en ${pokemon2}`);
    }
    turno ++;
    pokemon1 = entrenador1.pokemon[turno-1];
    pokemon2 = entrenador2.pokemon[turno-1];
}

if(pokemon1){
    console.log(`${entrenador1.nombre} gana la batalla`);
}else{
    console.log(`${entrenador2.nombre} gana la batalla`);
}


