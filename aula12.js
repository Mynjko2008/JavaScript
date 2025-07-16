// Aula 12 – Funções com Parâmetros, Retorno e Escopo

// Funções são blocos reutilizáveis de código que podem receber dados (parâmetros),
// executar operações e retornar um resultado (return).

// Exemplo 1: Função que recebe um parâmetro e retorna uma saudação personalizada
function saudacao(nome) {
    // 'nome' é um parâmetro da função, usado como variável local dentro dela
    return `Olá, ${nome}! Bem-vindo ao curso.`;
}
const mensagem = saudacao('Arthur');  // Passa o argumento 'Arthur'
console.log(mensagem);  // Saída: Olá, Arthur! Bem-vindo ao curso.

// Exemplo 2: Função que recebe dois números e retorna a soma
function somar(a, b) {
    return a + b;  // Retorna o resultado da soma dos parâmetros
}
const resultado = somar(10, 5);
console.log(`O resultado da soma é: ${resultado}`);  // Saída: 15

// Exemplo 3: Escopo de variáveis

let escopoGlobal = 'Eu sou global';  // Variável global, acessível em todo o código

function mostrarEscopo() {
    let escopoLocal = 'Eu sou local';  // Variável local, visível apenas dentro da função
    console.log(escopoGlobal);  // Acesso permitido a variáveis globais dentro da função
    console.log(escopoLocal);   // Acesso permitido a variável local dentro da função
}

mostrarEscopo();
// console.log(escopoLocal); // ERRO: variável local não pode ser acessada fora da função

// Exemplo 4: Função que modifica o texto de um elemento HTML via DOM
function alterarTexto(idElemento, novoTexto) {
    const elemento = document.getElementById(idElemento);
    if(elemento) {
        elemento.textContent = novoTexto;  // Atualiza o conteúdo textual do elemento
    } else {
        console.log('Elemento não encontrado');
    }
}
// Pode ser usada em um HTML que contenha, por exemplo: <p id="mensagem">Texto</p>

// Exemplo 5: Função com retorno condicional
function verificarIdade(idade) {
    if(idade >= 18) {
        return "Você é maior de idade.";
    } else {
        return "Você é menor de idade.";
    }
}
console.log(verificarIdade(20));  // Saída: Você é maior de idade.

// Exemplo 6: Função que calcula a área de um retângulo
function calcularAreaRetangulo(base, altura) {
    return base * altura;  // Retorna a área (base vezes altura)
}
console.log(`Área do retângulo: ${calcularAreaRetangulo(5, 10)}`);  // Saída: 50

// Exemplo 7: Função que verifica se um número é par ou ímpar
function verificarParImpar(numero) {
    return numero % 2 === 0 ? `${numero} é par.` : `${numero} é ímpar.`;
}
console.log(verificarParImpar(7));  // Saída: 7 é ímpar.

// Exemplo 8: Função que retorna o maior de dois números
function encontrarMaiorNumero(a, b) {
    if(a > b) return `${a} é maior que ${b}.`;
    if(b > a) return `${b} é maior que ${a}.`;
    return `${a} e ${b} são iguais.`;
}
console.log(encontrarMaiorNumero(10, 20));  // Saída: 20 é maior que 10.

// Exemplo 9: Função que converte Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;  // Fórmula de conversão temperatura
}
console.log(`Temperatura em Fahrenheit: ${celsiusParaFahrenheit(25)}`);  // Saída: 77

// Exemplo 10: Função que soma todos os números de um array
function somarArray(numeros) {
    let soma = 0;
    for(let numero of numeros) {
        soma += numero;  // Acumula o valor de cada elemento
    }
    return soma;
}
console.log(`Soma dos elementos: ${somarArray([1,2,3,4,5])}`);  // Saída: 15

// Exercícios práticos

// 1. Multiplicar dois números
function multiplicar(a, b) {
    return a * b;
}
console.log(`Multiplicação: ${multiplicar(6, 7)}`);  // Saída: 42

// 2. Verificar se número é positivo, negativo ou zero
function verificarNumero(numero) {
    if(numero > 0) return `${numero} é positivo.`;
    if(numero < 0) return `${numero} é negativo.`;
    return `O número é zero.`;
}
console.log(verificarNumero(-5));  // Saída: -5 é negativo.

// 3. Calcular fatorial usando recursão
function calcularFatorial(n) {
    if(n === 0) return 1;  // Caso base
    return n * calcularFatorial(n - 1);  // Chamada recursiva
}
console.log(`Fatorial de 5: ${calcularFatorial(5)}`);  // Saída: 120

// Recapitulando escopo com exemplo
function exemploEscopo() {
    let escopoLocal = 'Eu sou local';
    console.log(escopoGlobal);  // Acessa variável global
    console.log(escopoLocal);   // Acessa variável local
}
exemploEscopo();
// console.log(escopoLocal); // ERRO: não acessível fora da função