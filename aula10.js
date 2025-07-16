// ARRAY - Estrutura de dados que armazena múltiplos valores em uma única variável.
// Cada valor é acessado por um índice numérico, começando do zero (indexação zero).

const investimentoMensal = [
    1000,   // Valor investido em Janeiro (índice 0)
    2000,   // Valor investido em Fevereiro (índice 1)
    3000,   // Valor investido em Março (índice 2)
    7000,   // Valor investido em Abril (índice 3)
    12000   // Valor investido em Maio (índice 4)
];

// Imprime todo o array no console
console.log(investimentoMensal);

// Acessa e imprime cada valor individualmente usando o índice do array
// Importante: o índice começa em 0, então o primeiro elemento é investimentoMensal[0]
console.log(`O valor investido no mês de Janeiro foi: ${investimentoMensal[0]}`);
console.log(`O valor investido no mês de Fevereiro foi: ${investimentoMensal[1]}`);
console.log(`O valor investido no mês de Março foi: ${investimentoMensal[2]}`);
console.log(`O valor investido no mês de Abril foi: ${investimentoMensal[3]}`);
console.log(`O valor investido no mês de Maio foi: ${investimentoMensal[4]}`);

// Exemplo de array contendo strings, representando nomes de Pokémons
const pokemons = [
    'Charizard',    // índice 0
    'Pikachu',      // índice 1
    'Alakazan'      // índice 2
];

// Acessando elementos do array e exibindo informações contextualizadas
console.log(`O pokémon ${pokemons[0]} é do tipo fogo`);
console.log(`O pokémon ${pokemons[1]} é do tipo elétrico`);
console.log(`O pokémon ${pokemons[2]} é do tipo psíquico`);

/* 
Notas técnicas importantes:

- Arrays em JavaScript são objetos dinâmicos que podem armazenar diferentes tipos de dados (números, strings, objetos, etc.).
- O comprimento (length) do array pode ser obtido com investimentoMensal.length.
- Índices inválidos (fora do intervalo) retornam 'undefined'.
- Arrays são mutáveis; seus elementos podem ser alterados, adicionados ou removidos.
- A indexação começando do zero é padrão em praticamente todas as linguagens de programação modernas.

*/
