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
