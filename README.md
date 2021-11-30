# API-School 🏫🖥
<p> Esse é um projeto de API REST utilizando os verbos HTTP e operações CRUD, desenvolvido durante o módulo 4 do curso de Web Dev da <a href="https://www.resilia.work/)">Resilia Educação</a>.

## Ferramentas necessárias 🛠
* <a href="https://git-scm.com/">Git<a>
* <a href="https://nodejs.org/en/)">Node.js<a>
* <a href="https://code.visualstudio.com/)">VSCode<a>

## Primeiros passos para rodar o servidor 👣

1. Clonar esse repositório;
   * ```$ git clone https://github.com/PalomaBarreto/API-School.git```
2. Na pasta do projeto, abra um terminal e instale as dependências;
    * ```npm install```
3. Crie e popuple o banco de dados. Atenção: execute o comando <b>apenas uma vez</b>.
    * ```node ./src/database/create-and-populate.js```
4. Inicie o servidor.
    * ```npm run dev```
    
## Rotas possíveis 🎲
* <b>GET:</b> acessar todos os cadastros de alunos
    * ```http://localhost:3003/students```
* <b>GET ÚNICO:</b> acessar um cadastro através de um parâmetro, nesse caso, o id do aluno
    * ```http://localhost:3003/students/:id```
* <b>POST:</b> inserir um novo cadastro, deve receber um objeto no corpo da requisição
    * ```http://localhost:3003/students```
* <b>PUT:</b> atualizar um cadastro antigo, deve receber um objeto no corpo da requisição
    * ```http://localhost:3003/students/:id```
* <b>DELETE:</b> deletar do banco de dados um dos cadastros
    * ```http://localhost:3003/students/:id```
<p>Para demonstrar e executar as rotas, uma das opções é utilizar o <a href="https://insomnia.rest/download">Insominia</a>.

## Tecnologias utilizadas 👩‍💻
* Nodemon
* Express
* SQLite3
* Cors

<p> Todas essas tecnologias você pode encontrar a documentação <a href="https://www.npmjs.com/">aqui</a>.
