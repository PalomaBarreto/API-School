const Student = require('../model/Student')
const StudentDAO = require('../DAO/StudentDAO')

const student = (app,db)=>
{
  const newStudentDAO = new StudentDAO(db)

  app.get('/students', async (req, res)=>
  {
    try
    {
      const resp = await newStudentDAO.getAllStudents()

      res.json(resp)
    }
    catch (error)
    {
      res.json(error)
    }
  })

  app.post('/students', async (req, res)=>
  {
    try
    {
      const body = req.body
      const newStudent = new Student(body.name, body.birthDate, body.CPF, body.email, body.career)

      //lógica de inserção
      const resp = await newStudentDAO.insertStudent(newStudent)
      res.json(resp)
    }
    catch (error)
    {
      res.json
      ({
        "msg": error.message,
        "error": true
      })
    }
  })

  //get único
  app.get('/students/:id', async (req, res)=>
  {
    const id = req.params.id

    //lógica de busca
    try
    {
      const resp = await newStudentDAO.getById(id)
      res.json(resp)
    }
    catch (error)
    {
      res.status(404).json(error)
    }

  })

  app.delete('/students/:id', async (req, res)=>
  {
    const id = parseInt(req.params.id)

    try
    {
      const resp = await newStudentDAO.deleteStudent(id)
      res.json(resp)
    }
    catch (error)
    {
      res.status(404).json
      ({
        "msg": error.message,
        "error": true
      })
    }
  })

  app.put('/students/:id', async (req, res)=>
  {
    const id = req.params.id
    const body = req.body

    //lógica para atualizar
    try
    {
      const respGet = await newStudentDAO.getById(id)
      const beforeUpdate = respGet.req[0]

      if (beforeUpdate)
      {
        const updatedStudent = new Student
        (
          body.name || beforeUpdate.NAME,
          body.birthDate || beforeUpdate.BIRTHDATE,
          body.CPF || beforeUpdate.CPF,
          body.email || beforeUpdate.EMAIL,
          body.career || beforeUpdate.CAREER
        )

        const resp = await newStudentDAO.updateStudent(id, updatedStudent)
        res.json(resp)
      }
      else
      {
        res.json
        ({
          "msg": `Aluno com id ${id} não existe`,
          "error": true
        })
      }
    }
    catch (error)
    {
      res.json
      ({
        "msg": error.message,
        "error": true
      })
    }
  })

}

module.exports = student