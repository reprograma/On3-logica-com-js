# Lógica + Javascript

### O objetivo desse módulo é apresentar às alunas conceitos básicos de lógica, lógica de programação, algoritmos e introdução ao javascript, com conceitos como variáveis, operadores e condicionais.

![javascript](images/javascript.gif)

***

* [Lógica e algoritmos](#lógica-e-algoritmos)
  * [O que é lógica](#o-que-é-logica)
  * [Exercício de lógica](#exercicio-de-lógica)
  * [O que são algoritmos](#o-que-são-algoritmos)
  * [O que é lógica de programação](#o-que-é-lógica-de-programação)
  * [Exercícios de algoritmos](#exercícios-de-algoritmos)
* [Javascript](#javascript)
  * [Linguagem de programação](#linguagem-de-programacao)
  * [O que é Javascript](#o-que-é-javascript)
  * [Variáveis](#variáveis)
  * [Comentários](#comentários)
  * [Operadores aritméticos](#operadores-aritméticos)
  * [Operadores de atribuição](#operadores-de-atribuição)
  * [Operadores de comparação](#operadores-de-comparação)
  * [Operadores lógicos](#operadores-lógicos)
  * [Data types](#data-types)
  * [Funções nativas](#funcões-nativas)
  * [Palavras reservadas](#palavras-reservadas)
  * [Case sensitive](#case-sensitive)
  * [Nomenclatura](#nomenclatura)
  * [Concatenação de variáveis](#concatenação-de-variáveis)
  * [console.log(), alert(), confirm e prompt](#consolelog-alert-confirm-e-prompt)
  * [if/else if/else](#ifelse-ifelse)
  * [Tarefa de casa](tarefa-de-casa)


### Lógica e algoritmos

#### O que é lógica

Lógica tem dois significados principais: discute o uso de raciocínio em alguma atividade e é o estudo do raciocínio válido. No segundo sentido, a lógica é discutida principalmente nas disciplinas de filosofia, matemática e ciência da computação.
(Fonte: [Wikipedia](https://pt.wikipedia.org/wiki/Lógica))

Abaixo temos um paradoxo (declaração aparentemente verdadeira que leva a uma contradição lógica) de lógica:

```
A afirmação abaixo é verdadeira.
A afirmação acima é falsa.
```

- Exemplos de lógica no dia a dia?

#### Exercício de lógica

https://github.com/reprograma/On3-logica-com-js/blob/master/exercicios/exercicio-1.md


#### O que é lógica de programação
O que podemos notar no exercício que fizemos acima?
Podemos dizer que seguimos uma sequência ordenada de passos até conseguir no resultado final? (Lemos cada frase, preenchemos valores em cada campo, eliminamos valores já preenchidos).

Lógica de programação é o método usado para escrever programas que um computador entenda.

A lógica de programação parte do princípio de que praticamente todas as tarefas humanas são uma sequência ordenada de passos, que acontecem durante um tempo finito e que produzem um resultado esperado.

Na ciência da computação, a álgebra booleana é a base do projeto de hardware, e é um conceito muito utilizado na programação.

```
0 e 1
não e sim
falso e verdadeiro
```


#### O que são algoritmos
Ao falar de lógica de programação nós já descrevemos o que é um algoritmo.

Algoritmo é um conceito muito antigo, que é utilizado desde antes de Cristo. Para os antigos, o algoritmos são procedimentos precisos, não ambíguos, mecânicos, eficientes e corretos.

Algumas definições de um algoritmo na programação são:

```
Sequência ordenada de passos, que acontecem durante um tempo finito e que produzem um resultado esperado.

Conjunto das regras e procedimentos lógicos perfeitamente definidos que levam à solução de um problema em um número finito de etapas.

Uma receita que mostra passo a passo os procedimentos necessários para a resolução de uma tarefa.
```


#### Como criar algoritmos

Os algoritmos surgem com a necessidade de resolver algum problema ou executar uma tarefa.
Para ajudar, podemos utilizar um fluxograma, que vai dar apoio visual para resolvermos a tarefa.

Fluxograma para resolver um problema de lâmpada que não acende
![lampada](images/flow-1.png)

Fluxograma para assar um pão
![pao](images/flow-2.png)


#### Exercícios de algoritmos

https://github.com/reprograma/On3-logica-com-js/blob/master/exercicios/exercicio-2.md


### Javascript

#### Linguagem de programação


#### O que é Javascript


#### Variáveis
No computador, uma variável é um espaço de memória que vai ser preenchido por algum valor variável. Na maioria dos casos, o valor variável vai ser definido pelo usuário.

Exemplo: Você faz o cadastro em um site, preenchendo um formulário com seu {nome} e depois quando você está logado na página você visualiza seu nome na página.

![sem variavel](images/var-1.png)

![cadastro](images/var-3.png)

![variavel](images/var-2.png)

***

Para declarar uma variável, podemos utilizar a palavra reservada `var`, seguida do nome da variável e o valor que estamos atribuindo a ela.

```js
var meuNome = 'Patricia';
```

Nas nossas aulas vamos utilizar duas palavras reservadas para declarar variáveis: `let` e `const`.

`let` é a versão mais moderna de `var`. A sintaxe é mesma.

```js
let fruta = 'Pera';
fruta = 'Abacaxi';
```

`const` é um novo jeito de declarar uma variável. A diferença é que ela é uma variável cujo valor, após ser declarado, não pode ser alterado.

```js
const meuNome = 'Patricia';
meuNome = 'Maria';

//A atribuição acima não é possível, e vai retornar um erro.
```

Referência: https://www.w3schools.com/js/js_es6.asp


#### Comentários
Comentar o código serve para deixar mensagens importantes para você e para outro programador que vai ler seu código.

Em JavaScript você pode fazer comentários de duas formas:

- Comentário em uma linha

```js
// Comentário simples de uma linha
```

- Comentário de múltiplas linhas

```js
/* Comentário
 de múltiplas
 linhas */
```

#### Operadores aritméticos

- Soma `+`
- Subtração `-`
- Multiplicação `*`
- Divisão `/`
- Exponenciação `**`
- Módulo (resto da divisão) `%`
- Incremento `++`
- Decremento `--`


#### Operadores de atribuição

- Igual `=`
- Adiciona valor `+=`
- Subtrai valor `-=`
- Multiplica valor `*=`
- Divide valor `/=`


#### Operadores de comparação

- Igual a `==` `===` (mesmo valor e mesmo tipo)
- Não é igual a `!=` `!==` (mesmo valor e mesmo tipo)
- Maior que `>`
- Menor que `<`
- Maior ou igual que `>=`
- Menor ou igual que `<=`
- Operador ternário `?`

``` js
(condição) ? resultado verdadeiro : resultado falso

let idade = 26;
let bebida = (age >= 21) ? "Cerveja" : "Suco";
console.log(bebida); // Cerveja
```

#### Operadores lógicos
- E `&&`
- Ou `||`
- Não/negação `!`
-

#### Data types

Tipos de dados (data types) são conceitos muito importantes em qualquer linguagem de programação.
Para conseguirmos trabalhar com variáveis, precisamos saber com que tipo de dado estamos lidando.

Existem alguns tipos de variáveis em Javascript:

* String
```js
let nome = 'Patricia';
```

* Number
```js
let number = 10;
```

* Boolean
```js
let option = false;
```

* Function
```js
let varFunction = function() {
  //código da função
}
```

* Array
```js
let sanduiches = ['Presunto e queijo', 'Mortadela', 'Rosbife'];
```

* Object
```js
let sanduiche = {
    nome: "Mortadela",
    preco: "5",
    disponibilidade: true
};
```

* Undefined
```js
let nome;
```

* Empty
```js
let nome = "";
```

* Null
 ```js
let nome = null;
```


#### typeof

`typeof` serve para descobrirmos o tipo de variável que estamos declarando ou recebendo. Importante lembrar que `typeof` retorna o tipo e não o valor da variável.

```js
typeof 0  //retorna number
typeof 'Patricia'  //retorna string
```

#### Funções nativas

`isNaN()` é uma função nativa do Javascript que serve para descobrir se uma variável NÃO é um número. Função nativa é uma função que já está pronta para ser usada quando quisermos, ela já vem junto com a linguagem.

```js
isNaN(1) //retorna false, porque é um número
```

```js
isNaN('patricia') //retorna true, porque não é um número
```

`Date()`


#### Palavras reservadas

Existem algumas palavras que não podemos utilizar para declarar variáveis, pois elas fazem parte da linguagem javascript.

```js
let let = 'nome da variável';
```


#### Case sensitive
Palavras que começam com letra maiúscula e minúscula são consideradas diferentes pelo JavaScript.

```js
let primeiroNome = 'Patricia';
let primeironome = 'Fernanda';
```

#### Nomenclatura

É importante seguir um padrão para nomemclatura de nomes de variáveis.
Existem 3 padrões de nomemclatura:

- underscore, com todas as letras minúsculas

```js
let primeiro_nome = 'Patricia';
```

- upper camelcase, todas inicias maiúsculas

```js
let PrimeiroNome = 'Patricia';
```

- lower camelcase, primeira letra minúscula e todas as inicias das próximas palavras maiúsculas

```js
let primeiroNome = 'Patricia';
```

```
Importante:
Não utilizar hífen, nem espaços e nem caracteres especiais para separar nomes de variáveis.
```

***


#### console.log(), alert(), confirm e prompt

```js
let getInputId = document.getElementById('textInput');
console.log(getInputId)
```

```js
let getInputId = document.getElementById('textInput');
alert(getInputId)
```

#### Concatenação de variáveis

```js
let name = 'Patricia';
console.log(`Meu nome é ${name}`);
```

```js
let name = 'Patricia';
console.log("Meu nome é " + name);
```


#### if/else if/else

If/else if/else são condicionais que utilizamos para executar ou não um pedaço de código.
Na vida real seria como tomar a decisão de atravessar ou não a rua. SE o sinal estiver VERDE, você atravessa. SENÃO (vermelho), você espera.


```js
if (condição) {
  // se a condição for verdadeira, o código aqui dentro será executado
}
```

```js
if (condição) {
  // se a condição for verdadeira, o código aqui dentro será executado
} else {
  // se a primeira condição não for verdadeira, o código aqui dentro será executado
}
```

```js
if (condição) {
  // se a condição for verdadeira, o código aqui dentro será executado
} else if (condição) {
  // se a condição anterior não for verdadeira, o código aqui dentro será executado
} else {
  // se a condição anterior não for verdadeira, o código aqui dentro será executado
}
```

O else if pode ser repetido quantas vezes for necessário.

***
