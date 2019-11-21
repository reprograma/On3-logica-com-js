# Exercício de contribuição em um projeto onde você é colaboradora

- Se você já fez `clone` do repositório dessa a aula, então não precisa fazer de novo.

### Instruções
#### Configurações básicas iniciais
* Ter o git instalado na sua máquina
* Abra o Git Bash
  ```
  git --version
  ```
* Verifique se seu usuário está configurado na sua máquina. (Deve aparecer seu ***user.name*** e ***user.email***)
	```
  git config --list
  ```

	* Caso não esteja configurado, fazer a configuração de ***user.name*** e ***user.email***
    ```
    git config --global user.name "Seu Nome"
    git config --global user.email "seu@email.com"
    ```

---
#### Caso vá fazer o fluxo do zero, desde o clone:

* Entre no Git Bash
* Verifique se está no diretório em que deseja clonar o repositório
	
  ```
  pwd
  ```
* Clonar o repositório desta aula
	
  ```
  git clone https://github.com/reprograma/On3-logica-com-js.git
  ```

---

#### Caso vá continuar trabalhando no repositório já clonado durante a aula:
* Entrar nesse repositório local

	```
  cd On3-logica-com-js/exercicios
  ```
* Criar uma branch nova com seu nome.
	
  ```
  git checkout -b proj-casa-seuNome
  ```
* Entrar no VSCode

	```
  code .
  ```
* Entrar na pasta '/exercicios' e siga as instruções a seguir.
* Fazer a sua solução do '/exercício-tarefa-de-casa.md'

* Voltando para o Git Bash.
* `git diff`: verificar o que você alterou no código.
* `git status`: verificar o status.
* `git add .`: Adicionar as alterações para área de preparação.
* `git status`: verificar o status novamente.
* `git commit -m "adicionando solução de Cíntia Fumi para aula de logica"`: adicionar mensagem de ***commit***.
* `git push origin proj-casa-seuNome`: subir as alterações da sua branch para o seu repositório remoto.
* Verificar se as alterações foram atualizadas na sua branch lá no github (https://github.com/reprograma/On3-logica-com-js)
* Ir para a aba ***Pull requests***
* Criar novo pull request ***Compare & pull request*** pelo github da reprograma verificando se está fazendo a solicitação da proj-casa-seuNome para a master
* *base: **master**    **<=**    compare: **proj-casa-seuNome***

---

#### Após todos ***pull request*** dessa aula serem aceitos, caso queria atualizar localmente seu repositório:
* No Git Bash, dentro deste repositório.
* `git checkout master`: voltar para a branch master
* `git pull origin master`: atualizar o repositório local
* Verificar no navegador (Chrome) se todas as atualizações vieram

---
#### Deletar sua branch após seu ***pull request*** ser aceito
* `git checkout master`: estar na branch **master** para remover sua branch
* `git branch -d proj-casa-seuNome`: deletar sua branch **proj-casa-seuNome**
  ```

---
#### Para ter este repositório no seu GitHub, existem 2 alternativas:
- Subindo como você subiu todos os seus projetos;
- Fazendo um ***fork*** pelo próprio repositório da Reprograma;

---
#### Subir esse repositório no seu github
* Criar um novo respositório no seu github https://github.com/new
* Copiar o link do repositório.
* `git remote add meuRepo https://github.com/<seuLogin>/<seuNovoRepositorio>.git`: adicionar o link remoto pelo Git Bash. (Como o remote origin já está linkado ao repositório da Reprograma, iremos adicionar o seu remote com outro nome). Obs: Nesse link acima, substituir `<seuLogin>` e `<seuNovoRepositorio>` com informações do seu login e seu repositório.
* `git commit -m "Exercício para casa" --allow-empty`: fazer um ***commit*** vazio, pois tudo já foi adicionado anteriormente e não há novas alterações
* `git push meuRepo master`: Subir esse repositório local no seu repositório do GitHub.

---
#### Fazendo um ***fork*** pelo próprio repositório da Reprograma
* Ir no repositório da Reprograma e clicar em ***Fork***