// Exemplo de uso de template literals com variáveis
let nome = 'Arthur'; // String
let idade = 16; // Número

let mensagem = `Olá, sou o ${nome} e tenho ${idade} anos.`;
console.log(mensagem);

// Lição 1: criar mensagem com profissão e salário
let profissao = 'Programador';
let salario = 3000;

let mensagemProfissao = `Ele é um ${profissao} e recebe por mês ${salario} reais.`;
console.log(mensagemProfissao);

// Lição 2: criar mensagem com raça e idade de um animal
let raca = 'Poodle';
let idadeAnimal = 6;

let mensagemAnimal = `Ela é uma ${raca} e tem ${idadeAnimal} anos.`;
console.log(mensagemAnimal);

/* 
Nota técnica: 
- let declara variáveis com escopo de bloco (visíveis apenas dentro do bloco onde são definidas).
- Template literals (crase ``) permitem interpolar expressões e variáveis, facilitando a criação de strings dinâmicas.
- Aspas simples ('') e duplas ("") definem strings comuns, funcionando de forma equivalente.
*/