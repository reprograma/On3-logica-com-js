### Transformar o algoritmo que vocês escreveram em código javascript. O usuário vai digitar as notas de cada trimestre e vocês vão mostrar na tela a média final

* Crie um algoritmo para o cálculo de média final de um aluno, para ele saber se passou de ano ou não
  - A média para passar de ano na escola é 7
  - O ano escolar tem 3 trimestres
  - Alunos aprovados devem ver a mensagem: Parabéns, você está aprovado com média [valor da média], aproveite suas férias!
  - Alunos reprovados devem ver a mensagem: Fuén, sua média é [valor da média] e você está reprovado.

  - *Bônus:*
    - Peça para o aluno digitar seu nome e mostre a mensagem de aprovado/reprovado junto com o nome ([Fulano], parabéns! você está aprovado, aproveite suas férias!)
    - Para os alunos reprovados, mostrar mensagem perguntando se eles gostariam de fazer aulas de recuperação para tentar melhorar a nota e passar de ano. Se o aluno responder que não, mostre a mensagem: Que pena, te vejo ano que vem. Se o aluno responder que sim, mostre a mensagem: Ótimo, as aulas de recuperação começam semana que vem!

    <!-- Código da aluna Viviane -->

    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercício para casa</title>
</head>
<body>
    <h1>Algoritmo Média</h1>

    <script type="text/javascript">

        // Declaração de variável para receber o nome do Aluno
        let nomeAluno = prompt("Digite seu nome");

        // Declaração de variáveis para recebimento das notas dos trimestres
        // Uso do parseInt para converter a string recebida no prompt em número
        let nota1 = parseFloat(prompt("Digite a nota do 1º trimestre"));
        let nota2 = parseFloat(prompt("Digite a nota do 2º trimestre"));
        let nota3 = parseFloat(prompt("Digite a nota do 3º trimestre"));

        // Variável com fator de divisão da nota
        // Caso necessite calcular por trimestre ou semestre, só alterar o fator
        let fatorDivisao = 3;

        // Variável para média aplicada na escola
        // Caso a escola utilize outro valor para base de média só alterar a variável
        let media = 7;
        
        // Variável armazenando cálculo da média do aluno
        // Uso do toFixed para arredondamento com duas casas decimais
        let calculoMedia = ((nota1 + nota2 + nota3) / fatorDivisao).toFixed(2);

        // Condição para verificar se aluno foi aprovado ou reprovado
        if(calculoMedia >= media){
            alert(`${nomeAluno}. Parabéns, você foi aprovada(o). Aproveite as férias!`);
        }
        else{
            alert(`Fuén, sua média é: ${calculoMedia} " e você está reprovada(o).`);
            let recuperacao = confirm("Deseja fazer aula de recuperação?");

            // Condição para verificar se aluno deseja fazer recuperação caso reprovado
            if(recuperacao)
            {
                alert("Ótimo, as aulas de recuperação começam semana que vem.");
            }
            else{
                alert("Que pena, te vejo ano que vem");
            }
        }

    </script>

</body>
</html>
