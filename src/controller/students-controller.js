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
      const newStudent = new Student(body.name, body.birthData, body.CPF, body.email, body.career)

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

}

module.exports = student