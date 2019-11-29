### Transformar o algoritmo que vocês escreveram em código javascript. O usuário vai digitar as notas de cada trimestre e vocês vão mostrar na tela a média final

* Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não
  - A média para passar de ano na escola é 7
  - O ano escolar tem 3 trimestres
  - Alunos aprovados devem ver a mensagem: Parabéns, você está aprovado com média [valor da média], aproveite suas férias!
  - Alunos reprovados devem ver a mensagem: Fuén, sua média é [valor da média] e você está reprovado.

  - *Bônus:*
    - Peça para o aluno digitar seu nome e mostre a mensagem de aprovado/reprovado junto com o nome ([Fulano], parabéns! você está aprovado, aproveite suas férias!)
    - Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!
    - Arredondar valores da nota (mostrar números inteiros)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>EXERCÍCIO PARA CASA DA ISAURA</title>
</head>
<body>
    
<!--
//Calcular média do Alunos
//Inserir notas do aluno 1bim, 2bim e 3bim;
//Criar uma função: Somar notas f(1bm+1bim+3bim/3);
//Ver média do Aluno:
//> ou = 7 Aprovado;
//< 7 reprovado;
//Enviar mensagem 
//Caso Precise de 05 pontos para ser aprovado , aguardar decisão do Professor-->

<script>
let NomeAluno = prompt('Insira seu Nome');
let Nota1Trim = parseInt(prompt('Inserir nota do Primeiro Trimestre'));
let Nota2Trim = parseInt(prompt('Inserir nota do Segundo Trimestre'));
let Nota3Trim = parseInt(prompt('Inserir nota do Terceiro Trimestre'));
let MediaEscola = 7;

let MediaFinal = Math.round(Nota1Trim + Nota2Trim + Nota3Trim) / 3;

if (MediaFinal >= MediaEscola)
{ alert (`${NomeAluno}, Parabéns! você está aprovado, aproveite suas férias!`);
}
else
{ alert (`${NomeAluno}, você está reprovado!  Sua Média atualmente é ${MediaFinal}`);
 let AguardandoNota= confirm ('Gostaria de fazer aulas de recuperação para tentar melhorar sua nota e passar de ano?')
}


</script>
</body>
</html>

  ```js
  let nomeAluno = prompt('Digite o seu nome');
  let notaUm = parseInt(prompt('Digite a nota do primeiro trimestre'));
  let notaDois = parseInt(prompt('Digite a nota do segundo trimestre'));
  let notaTres = parseInt(prompt('Digite a nota do terceiro trimestre'));
  let mediaEscola = 7;

  let calculoMedia = Math.floor(((notaUm + notaDois + notaTres) / 3));

  if (calculoMedia >= mediaEscola) {
    alert(`Parabéns ${nomeAluno}, você está aprovado com média ${calculoMedia}, aproveite suas férias!`);
  } else {
    alert(`${nomeAluno}, sua média é ${calculoMedia} e você está reprovado.`);
    let recuperacao = confirm('Você gostaria de fazer aulas de recuperação?');

    if (recuperacao === true) {
      alert(`Ótimo ${nomeAluno}, as aulas de recuperação começam semana que vem!`);
    } else {
      alert(`Que pena ${nomeAluno}, te vejo ano que vem.`);
    }
    //alert('Fuén, sua média é ' + calculoMedia + ' e você está reprovado.');
  }
  ```
