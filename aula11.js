// Declaração de uma função em JavaScript
// Funções são blocos reutilizáveis de código que executam uma tarefa específica
// Elas ajudam a organizar o código, evitar repetição e aumentar a legibilidade

function pegarComanda() {
    // Este é o corpo da função, onde colocamos as instruções a serem executadas
    console.log('Olá, boa noite!!!');
    console.log('Pegue sua comanda!!!');
    console.log('Bom apetite!!!');
}

// Para executar o código dentro da função, é necessário chamá-la pelo nome com parênteses
pegarComanda();

// Reforçando conceitos importantes:
// - A função não executa nada até ser chamada
// - Podemos chamar a função quantas vezes quisermos, evitando repetir o código

// Exemplo: Chamando a função várias vezes em sequência
pegarComanda();
pegarComanda();

// Funções também podem receber parâmetros para trabalhar com dados variados (introdução)
// Exemplo futuro: function pegarComanda(nomeCliente) { ... }

// A estrutura de repetição (loop) é utilizada para executar um bloco de código várias vezes
// Funções e loops são fundamentais para a programação eficiente

// Exemplo simples de loop para chamar a função 3 vezes (explicação para a próxima aula)
/*
for(let i = 0; i < 3; i++) {
    pegarComanda();
}
*/