let primeiroNome = 'Arthur'
let ultimoNome = 'Mynjko'
let nomeCompleto = primeiroNome + ' ' + ultimoNome; //Usando o +
let nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`; //usando Tamplate literal

console.log(nomeCompleto);

// Bloco 1
let pais1 = "Brasil";
let capital1 = "Brasília";
let pais2 = "Alemanha";
let capital2 = "Berlin";
let pais3 = "Inglaterra";
let capital3 = "Londres";
let descricao = `O país ${pais1} tem a capital ${capital1}.\n O país ${pais2} tem a capital ${capital2}.\n O país ${pais1} tem a capital ${capital3}.`;
console.log(descricao);

// Bloco 2
let nome1 = "João";
let dado1 = "Sim";
let quantos1 = 2;
let nome2 = "Emerson";
let dado2 = "Sim";
let quantos2 = 4;
let nome3 = "Jonas";
let dado3 = "Não";
let descricao1 = `O ${nome1} possui cartão de crédito? ${dado1} quantos? ${quantos1}.\n O ${nome2} possui  cartão de crédito? ${dado2} quantos? ${quantos2}.\n O ${nome3} possui cartão de crédito? ${dado3}`;
console.log(descricao1);

// Bloco 3
let mae = "Laura";
let salario1 = 6000;
let pai = "Arthur";
let salario2 = 12600;
let filho = "Joseph";
let salario3 = 1500;
let filha = "Robin";
let salario4 = 1500;

let soma = salario1 + salario2 + salario3 + salario4;
let quantidade = 4;
let media = soma/quantidade;
let descricao2 = `A Familia Mynjko composta pelo ${pai} pela ${mae} e pelos seus filhos ${filho} e ${filha}, ganham uma media de ${media} reais `;
console.log(descricao2);
