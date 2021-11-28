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
      const body = re.body
      const newStudent = new Student(body.name)
    }
    catch (error)
    {
      
    }
  })

  
}

module.exports = student