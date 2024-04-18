let listaDeNumerosSorteados = []; // lista de numeros sorteados
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio(); // cria uma variável que recebe uma função que gera um número aleatório
let tentativas = 1; // cria uma variável que recebe o valor 1


function exibirTextoNaTela(tag, texto) { // cria uma função que recebe dois parâmetros, tag(que é a tag html) e texto(que é o texto que será exibido na tela
    let campo = document.querySelector(tag); // cria uma variável que recebe a tag html, document.querySelector é uma função que busca um elemento no html
    campo.innerHTML = texto; // insere o texto na tag html, campo.innerHTML é uma propriedade que insere um texto em uma tag html
    responsiveVoice.speak(texto , 'Brazilian Portugueses Female', {rate: 1.2});
}

function mensagemInicial() { // cria uma função que exibe uma mensagem inicial na tela
exibirTextoNaTela('h1', 'Jogo do número secreto'); // chama a função exibirTextoNaTela e passa dois parâmetros, a tag h1 e o texto que será exibido
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

mensagemInicial(); // chama a função mensagemInicial


function verificarChute() { // cria uma função que verifica o chute do usuário
    let chute = document.querySelector('input').value; // cria uma variável que recebe o valor do input, document.querySelector é uma função que busca um elemento no html, .value é uma propriedade que retorna o valor de um input
    if (chute == numeroSecreto) { // cria uma condição que verifica se o chute é igual ao número secreto
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; // cria uma variável que recebe uma condição, se tentativas for maior que 1, a variável recebe 'tentativas', senão, recebe 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela("p" , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); //getElementById é uma função que busca um elemento no html pelo seu id, .removeAttribute é uma propriedade que remove um atributo de um elemento
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p" , "O número é menor do que o chute");
        } else {
            exibirTextoNaTela("p" , "O número é maior do que o chute");
        }
        tentativas++; // incrementa a variável tentativas
        limparCampo();
    }
}

function gerarNumeroAleatorio() { // cria uma função que gera um número aleatório
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; // uma variavel que mostrará o tamanho da lista, onde cada elemento se encontra.
    if (quantidadeDeElementosNaLista == numeroEscolhido){
        listaDeNumerosSorteados = []; //limpando a lista
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)//o item que quer // adiciona item ao final da lista 
        return numeroEscolhido;
    } // includes é uma função que verifica se um elemento está presente em um array(lista). 
}

function limparCampo() {
    chute = document.querySelector('input'); // cria uma variável que recebe o input
    chute.value = ''; // limpa o input
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(); // numeroSecreto recebe um novo número aleatório
    limparCampo(); // chama a função limparCampo
    tentativas = 1; // tentativas recebe o valor 1
    mensagemInicial(); // chama a função mensagemInicial
    document.getElementById('reiniciar').setAttribute('disabled', true); // getElementById é uma função que busca um elemento no html pelo seu id, .setAttribute é uma propriedade que adiciona um atributo a um elemento, 'disabled' é o atributo que será adicionado, true é o valor do atributo
}











