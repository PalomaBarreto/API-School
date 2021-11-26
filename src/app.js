const express = require('express')
const app = express()

const cors = require('cors')

const port = 3000

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