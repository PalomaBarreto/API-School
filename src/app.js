const express = require('express')
const app = express()

const cors = require('cors')

const port = process.env.PORT || 3003

//importando controller
const students = require('./controller/students-controller')

//importanto o banco de dados
const db = require('./database/sqlite-db')

//middlewares
app.use(cors())
app.use(express.json())
app.use((req, res, next)=>
{
  console.log('middleware ok')
  next()
})

//rota da entidade
students(app, db)

app.listen(port, ()=>
{
console.log(`Servidor rodando: http://localhost:${port}/`);
})