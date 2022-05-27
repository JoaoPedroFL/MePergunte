![header](https://user-images.githubusercontent.com/95944454/159194797-881b4d7d-be0c-4ddb-a457-9616737830f4.jpeg)

> status: Finalizado ✅

### Uma plataforma de perguntas e respostas!

## Alguns campos do Modelo são:

+ Perguntas
+ Fazer perguntas
+ Responder perguntas

## O que faz?

+ Lista as perguntas criadas da mais recente a mais antiga.
+ Permite criar novas perguntas e lista-las automaticamente.
+ Permite responder as perguntas já feitas.

## Tecnologias usadas.

<table>
  <tr>
    <td>Express</td>
    <td>EJS</td>
    <td>Body-Parser</td>
    <td>Sequelize</td>
    <td>Bootstrap</td>
    <td>MySql</td>
    <td>MySql2</td>
  </tr>
  <tr>
    <td>4.17.3</td>
    <td>3.1.6</td>
    <td>1.19.2</td>
    <td>6.17.0</td>
    <td>4.3.1</td>
    <td>8.0</td>
    <td>2.3.3</td>
  </tr>
</table>

## Como rodar a aplicação.

1) Tenha as ferramentas usadas na aplicação instaladas na sua máquina, com a correspondente versão acima.
2) Crie um Schema no BD, recomendo nomeai-lo ```pergunte_me```, na pasta Database modifique o arquivo database.js com as configurações do seu MySql.(```Nome do BD```, root, senha, host, dialect)
3) Recomendo instalar o Nodemon e executar no terminal o comando, ``` nodemon index.js ```
5) Automaticamente será criada as tabelas de perguntas e respostas no Schema que você criou, e a aplicação estará funcionando perfeitamente.
6) No arquivo index.js a partir da linha 68, você pode colocar a porta do servidor que for de sua escolha.
