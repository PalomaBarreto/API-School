const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const pathFile = path.resolve(__dirname, 'database.db')

const db = new sqlite3.Database(pathFile);

//Students
const STUDENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "STUDENTS" (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "NAME" varchar(64),
  "BIRTHDATE" date,
  "CPF" varchar(14),
  "EMAIL" varchar(64),
  "CAREER" varchar(64),
  "REGISTRATIONDATE" date  
);`;

const ADD_STUDENTS_DATA = `
  INSERT INTO STUDENTS (ID, NAME, BIRTHDATE, CPF, EMAIL, CAREER, REGISTRATIONDATE)
  VALUES
  (1, 'Filipe Pinheiro', '21-10-1992', '123.456.789-10', 'filipe@pinheiro.com', 'engenharia de materiais', '10-06-2011'),
  (2, 'Paloma Barreto', '21-08-92', '111.213.141-51', 'paloma@barreto.com', 'engenharia de alimentos', '10-03-2012')  
`

function createTableStudents()
{
  db.run(STUDENTS_SCHEMA, (error) =>
  {
    if (error) console.log("Erro ao criar tabela de alunos");
  });
}

function insertTableStudents()
{
  db.run(ADD_STUDENTS_DATA, (error) =>
  {
    if (error) console.log("Erro ao popular tabela de alunos");
  });
}

db.serialize(()=>
{
  createTableStudents();
  insertTableStudents();
});