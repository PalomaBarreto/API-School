<h1 align="center">API-School 🏫🖥</h1>
<p> Projeto de API REST utilizando os verbos HTTP e operações CRUD, desenvolvido durante o módulo 4 do curso de Web Dev da <a href="https://www.resilia.work/)">Resilia Educação</a>.
  
<h2 align="center">Status do Projeto 📆 </h2>
<p align="center">Concluído ✅</p>
  
  
## Ferramentas necessárias 🛠
  * <a href="https://git-scm.com/)">Git</a>
  * <a href="https://nodejs.org/en/)">Node.js<a>
  * <a href="https://code.visualstudio.com/)">VSCode<a>
 

## Primeiros passos para rodar o servidor 👣

1. Clonar esse repositório;
   * ```$ git clone https://github.com/PalomaBarreto/API-School.git```
2. Na pasta do projeto, abra um terminal e instale as dependências;
    * ```npm install```
3. Crie e popuple o banco de dados. Atenção: execute o comando <b>apenas uma vez</b>;
    * ```node ./src/database/create-and-populate.js```
4. Inicie o servidor.
    * ```npm run dev```
    
## Rotas 🎲
  
| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **GET** | `http://localhost:3003/students` | acessar todos os cadastros de alunos |
| **GET ÚNICO** | `http://localhost:3003/students/{id}` | acessar um cadastro específico |
| **POST** | `http://localhost:3003/students` | inserir um novo cadastro |
| **PUT** | `http://localhost:3003/students/{id}` | atualizar um cadastro antigo |
| **DELETE** | `http://localhost:3003/students/{id}` | deletar um dos cadastros do banco de dados|

  <i><p>Importante: <b>POST</b> e <b>PUT</b> devem receber um objeto no corpo da requisição.</i>
<p>Para demonstrar e executar as rotas, uma das opções é utilizar o <a href="https://insomnia.rest/download">Insominia</a>.

## Tecnologias utilizadas 👩‍💻
* Nodemon
* Express
* SQLite3
* Cors

<p> Para todas essas tecnologias você pode encontrar a documentação <a href="https://www.npmjs.com/">aqui</a>.
  
  ## Autora 🦸‍♀️
  
  * <a href="https://www.linkedin.com/in/paloma-carvalho-086b9710b/">Paloma</a>
