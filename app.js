//Desafio 1
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//Desafio 2
function verificarClique__Console() {
    console.log('Botão clicado!');
}

//Desafio 3
function verificarClique__Alerta(){
    alert('Eu amo JS');
}

//Desafio 4
function verificarClique__Prompt() {
    let cidade = prompt('Cite uma cidade brasileira: ');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

//Desafio 5
function verificarClique__Soma(){
    let numero1 = Number(prompt('Digite um número: '))
    let numero2 = Number(prompt(`Digite outro número para somar com ${numero1}: `));
    let soma = numero1 + numero2;
    alert(`Soma entre ${numero1} e ${numero2} é igual a ${soma}.`)
}
