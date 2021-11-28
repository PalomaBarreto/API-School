class StudentDAO
{
  constructor(db)
  {
    this.db = db
  }

  //método para mostrar todos os cadastros de alunos
  getAllStudents()
  {    
    const query = 'SELECT * FROM STUDENTS'

    return new Promise((resolve, reject)=>
    {
      this.db.all(query, (error, rows)=>
      {
        if (error)
        {
          reject
          ({
            "msg": error.message,
            "error": true
          })
        }
        else
        {
          resolve
          ({
            "students": rows,
            "count": rows.length,
            "error": false
          })
        }
      })
    })
  }

  //método para inserir um novo cadastro de aluno
  insertStudent(newStudent)
  {
    const query = 'INSERT INTO STUDENTS (NAME, BIRTHDATE, CPF, EMAIL, CAREER, REGISTRATIONDATE) VALUES (?,?,?,?,?,?)'
    const insert = [newStudent.name, newStudent.birthDate, newStudent.CPF, newStudent.email, newStudent.career, newStudent.registrationDate]

    return new Promise((resolve, reject)=>
    {
      this.db.run(query, insert, (error)=>
      {
        if (error)
        {
          reject
          ({
            "msg": error.message,
            "error": true
          })
        }
        else
        {
          resolve
          ({
            "req": newStudent,
            "error": false
          })
        }
      })
    })
  }

  //método para buscar um cadastro através do id
  getById(id)
  {
    const query = `SELECT * FROM STUDENTS WHERE ID = ?`

    return new Promise((resolve, reject)=>
    {
      this.db.all(query, id, (error, rows)=>
      {
        if (error)
        {
          reject
          ({
            "msg": error.message,
            "error": true
          })
        }
        else
        {
          resolve
          ({
            "req": rows,
            "error": false
          })
        }
      })
    })
  }

  //método para deletar um cadastro de aluno através do id
  async deleteStudent(id)
  {
    try
    {
      const student = await this.getById(id)

      if (student.req.length)
      {
        const query = `DELETE FROM STUDENTS WHERE ID = ?`

        return new Promise((resolve, reject)=>
        {
          this.db.run(query, id, (error)=>
          {
            if (error)
            {
              reject(error.message)  
            }
            else
            {
              resolve
              ({
                "msg": `O aluno com id ${id} foi deletado`,
                "error": false
              })
            }
          })
        })
      }
      else
      {
        throw new Error(`Aluno com id ${id} não existe`)
      }
    }
    catch (error)
    {
      throw new Error(error.message)
    }
  }

  //método para atualizar um cadastro
  async updateStudent(id, newStudent)
  {
    try
    {
      const query = `UPDATE STUDENTS SET NAME = (?), BIRTHDATE = (?), CPF = (?), EMAIL = (?), CAREER = (?), REGISTRATIONDATE = (?)
      WHERE ID = (?) `
      const update = [newStudent.name, newStudent.birthDate, newStudent.CPF, newStudent.email, newStudent.career, newStudent.registrationDate, id]

      return new Promise((resolve, reject)=>
      {
        this.db.run(query, update, (error)=>
        {
          if (error)
          {
            reject(error)
          }
          else
          {
            resolve
            ({
              "msg": `O aluno com id ${id} foi atualizado`,
              "student": newStudent,
              "error": false
            })
          }
        })
      })
    }
    catch (error)
    {
      throw new Error(error.message)
    }
  }
}

module.exports = StudentDAO
