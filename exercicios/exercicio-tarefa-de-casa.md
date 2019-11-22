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


  ```js
    let nome = prompt('Escreva seu nome:');
    let notaPrimeiroTrimestre = parseInt(prompt('Qual a sua média do primeiro trimestre?'));
    let notaSegundoTrimestre = parseInt(prompt('Qual a sua média do segundo trimestre?'));
    let notaTerceiroTrimestre = parseInt(prompt('Qual a sua média do terceiro trimestre?'));
    let mediaEscolar = 7;

    let calculoMedia = Math.floor(((notaPrimeiroTrimestre + notaSegundoTrimestre + notaTerceiroTrimestre) / 3));

    let aprovado = calculoMedia >= mediaEscolar;
    let reprovado = calculoMedia < mediaEscolar;

    if (aprovado) {
      alert(`${nome}, parabéns! Você está aprovado(a) com média ${calculoMedia}. Aproveite suas férias!`);
    } else if (reprovado) {
      alert(`${nome}, sua média é ${calculoMedia} e você está reprovado(a). :(`)
      let recuperacao = confirm(`Você gostaria de fazer aulas de recuperação?`);

      if (recuperacao === true) {
        alert(`Ótimo, as aulas de recuperação começam semana que vem!`);
      } else {
        alert(`Que pena, te vejo ano que vem.`)
      }
    }
  ```
