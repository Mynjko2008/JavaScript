// Concatenando strings com operador + e template literals
let primeiroNome = 'Arthur';
let ultimoNome = 'Mynjko';

let nomeCompleto = primeiroNome + ' ' + ultimoNome; // Usando concatenação com +
let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`; // Usando template literal

console.log(nomeCompleto);

// Bloco 1: Descrição de países e suas capitais usando template literals e quebras de linha (\n)
let pais1 = "Brasil";
let capital1 = "Brasília";

let pais2 = "Alemanha";
let capital2 = "Berlin";

let pais3 = "Inglaterra";
let capital3 = "Londres";

let descricao = `O país ${pais1} tem a capital ${capital1}.\nO país ${pais2} tem a capital ${capital2}.\nO país ${pais3} tem a capital ${capital3}.`;
console.log(descricao);

// Bloco 2: Informações sobre pessoas e cartões de crédito, com template literals e interpolação
let nome1 = "João";
let dado1 = "Sim";
let quantos1 = 2;

let nome2 = "Emerson";
let dado2 = "Sim";
let quantos2 = 4;

let nome3 = "Jonas";
let dado3 = "Não";

let descricao1 = `O ${nome1} possui cartão de crédito? ${dado1} quantos? ${quantos1}.\nO ${nome2} possui cartão de crédito? ${dado2} quantos? ${quantos2}.\nO ${nome3} possui cartão de crédito? ${dado3}.`;
console.log(descricao1);

// Bloco 3: Soma dos salários da família e descrição com template literal
let mae = "Laura";
let salario1 = 6000;

let pai = "Arthur";
let salario2 = 12600;

let filho = "Joseph";
let salario3 = 1500;

let filha = "Robin";
let salario4 = 1500;

// Soma dos salários da família
let soma = salario1 + salario2 + salario3 + salario4;

// Descrição da família e soma dos ganhos usando template literal
let descricao2 = `A família Mynjko composta pelo ${pai}, pela ${mae} e pelos seus filhos ${filho} e ${filha}, todos juntos ganham ${soma} reais.`;
console.log(descricao2);
