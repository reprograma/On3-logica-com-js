### Exercícios

* Declare uma variável e mostre no console do navegador somente se essa variável for uma string

```js
let saudacao = 'Olá';
if (typeof saudacao === 'string') {
  console.log(saudacao);
  // vai aparecer Olá no console
}
```

```js
let saudacao = 3;
if (typeof saudacao === 'string') {
  console.log(saudacao);
  // não vai aparecer nada no console, pois a variável é do tipo numero
}
```

***

* Declare outra variável com uma mensagem de texto pedindo para o usuário clicar em um dos botões (OK ou Cancel)
  - Se ele clicar em OK, mostre o seguinte alerta na tela: Você apertou o botão OK
  - Se ele clicar em Cancel, mostre o seguinte alerta na tela: Você apertou o botão Cancel

```js
let mensagem = 'Aperte um botão.';
let botao = confirm(mensagem);
console.log(botao);
let mensagemOk = 'Você clicou em OK';
let mensagemCancel = 'Você clicou em Cancel';

if (botao === true) {
  alert(mensagemOk);
} else {
  alert(mensagemCancel);
}
```

***

* Declare outra variável com uma mensagem de texto pedindo para o usuário digitar o seu nome
  - Verifique se o nome é uma String
  - Se for uma string, mostre o seguinte alerta na tela: Olá nomedavariavel

  * Tem que utilizar o isNan();

***

* Peça para o usuário digitar dois nomes de frutas e depois compare uma com a outra
  - Se elas forem iguais, mostre um alerta na tela avisando que elas são iguais
  - Se não forem, mostre um alerta na tela avisando que são frutas diferentes

```js
let primeiraFruta = prompt('Digite um nome de fruta');
let segundaFruta = prompt('Digite outra nome de fruta');
console.log(primeiraFruta, segundaFruta);

if (primeiraFruta === segundaFruta) {
  alert(`${primeiraFruta} é igual a ${segundaFruta}`);
} else {
  alert(`${primeiraFruta} é diferente de ${segundaFruta}`);
}
```

***

* Peça para o usuário digitar três números e verifique se os números são positivos, negativos ou zero
  - Se o número for positivo, mostre a mensagem: "O número [x] é positivo"
  - Se o número for negativo, mostre a mensagem: "O número [x] é negativo"
  - Se o número for zero, mostre a mensagem: "O número [x] é zero"
  - Você pode mostrar uma mensagem para cada número ou uma mensagem só para os três

***

* Crie um algoritmo em javascript para verificar se um cinema já está aberto. O cinema abre às 14h.
  - Se estiver aberto, mostre a mensagem: Agora são [x horas] e o cinema já está aberto desde às 14h.
  - Se estiver fechado, mostre a mensagem: Agora são [x horas] e o cinema só abre às 14h.
