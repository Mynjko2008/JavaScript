//Tipo objeto em javascript

// Isso cria um OBJETO chamado "carta" (como uma ficha de Pokémon)
const carta = { 
    // nome: guarda o TIPO da carta (texto)
    nome: "Pokémon",  // <- Isso é uma PROPRIEDADE

    // habilidade: guarda um NÚMERO (quantos % de habilidade tem)
    habilidade: 95,   // <- Outra propriedade
    
    defesa: 40,      // <- Número de DEFESA
    ataque: 89,      // <- Número de ATAQUE
    slogan: "Pokémon Amerelo"  // <- Frase especial da carta
};
//console.log(`Meu personagem se chama: ${carta.nome} `);

const pokemon = {
    nome: "Charizard",
    habilidade: "Blaze",
    hp: 78,
    ataque: 84,
    defesa: 78,
    sp_atack: 109,
    sp_def:100,
    velocidade: 100,
    slogan: "Lagartão de fogo"
};
console.log(`Meu pokémon se chama: ${pokemon.nome}`);
console.log(`Sua habilidade é: ${pokemon.habilidade}`);
console.log(`Seu HP é: ${pokemon.hp}`);
console.log(`Seu ataque é: ${pokemon.ataque}`);
console.log(`Sua defesa é: ${pokemon.defesa}`);
console.log(`Seu ataque especial é: ${pokemon.sp_atack}`);
console.log(`Sua defesa especial é: ${pokemon.sp_def}`);
console.log(`Sua velocidade é: ${pokemon.velocidade}`);
console.log(`Seu slogan é: ${pokemon.slogan}`);

const linguagensProgramacao = {
    linguagen1:'Java',
    linguagen2:'PHP',
    linguagen3:'Python',
    linguagen4:'C#',
    linguagen5:'C++'
};
console.log(`A linguagem ${linguagensProgramacao.linguagen1} é o inferno na Terra`);
console.log(`A linguagem ${linguagensProgramacao.linguagen2} é voltada para formularios Back-End`);
console.log(`A linguagem ${linguagensProgramacao.linguagen3} é perfeita para iniciantes`);
console.log(`A linguagem ${linguagensProgramacao.linguagen4} é dedicada para aplicativos Windows`);
console.log(`A linguagem ${linguagensProgramacao.linguagen5} é voltada para programação em jogos`);