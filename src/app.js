const express = require('express')
const app = express()

const cors = require('cors')

const port = 3000

//importando controllers

//importanto o banco de dados
const db = require('./database/sqlite-db')

//middlewares
app.use(express.json())
app.use((req, res, next)=>
{
  console.log('middleware ok')
  next()
})

app.listen(port, ()=>
{
console.log(`Servidor rodando: http://localhost:${port}/`);
})