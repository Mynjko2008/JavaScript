// Exemplo de objeto em JavaScript: "carta"
// Um objeto é uma coleção de propriedades que descrevem características ou dados
const carta = { 
    nome: "Pokémon",        // Propriedade que guarda o nome do objeto (string)
    habilidade: 95,         // Propriedade numérica que indica habilidade
    defesa: 40,             // Valor numérico da defesa
    ataque: 89,             // Valor numérico do ataque
    slogan: "Pokémon Amarelo"  // Texto descritivo (string)
};

// Objeto mais detalhado: "pokemon"
const pokemon = {
    nome: "Charizard",
    habilidade: "Blaze",
    hp: 78,
    ataque: 84,
    defesa: 78,
    sp_atack: 109,    // Ataque especial
    sp_def: 100,      // Defesa especial
    velocidade: 100,
    slogan: "Lagartão de fogo"
};

// Acessando e exibindo as propriedades do objeto pokemon
console.log(`Meu pokémon se chama: ${pokemon.nome}`);
console.log(`Sua habilidade é: ${pokemon.habilidade}`);
console.log(`Seu HP é: ${pokemon.hp}`);
console.log(`Seu ataque é: ${pokemon.ataque}`);
console.log(`Sua defesa é: ${pokemon.defesa}`);
console.log(`Seu ataque especial é: ${pokemon.sp_atack}`);
console.log(`Sua defesa especial é: ${pokemon.sp_def}`);
console.log(`Sua velocidade é: ${pokemon.velocidade}`);
console.log(`Seu slogan é: ${pokemon.slogan}`);

// Exemplo de objeto com linguagens de programação
const linguagensProgramacao = {
    linguagem1: 'Java',
    linguagem2: 'PHP',
    linguagem3: 'Python',
    linguagem4: 'C#',
    linguagem5: 'C++'
};

// Exibindo informações sobre as linguagens
console.log(`A linguagem ${linguagensProgramacao.linguagem1} é o inferno na Terra`);
console.log(`A linguagem ${linguagensProgramacao.linguagem2} é voltada para formulários Back-End`);
console.log(`A linguagem ${linguagensProgramacao.linguagem3} é perfeita para iniciantes`);
console.log(`A linguagem ${linguagensProgramacao.linguagem4} é dedicada para aplicativos Windows`);
console.log(`A linguagem ${linguagensProgramacao.linguagem5} é voltada para programação em jogos`);