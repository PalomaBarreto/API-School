class StudentDAO
{
  constructor(db)
  {
    this.db = db
  }

  getAllStudents()
  {
    return new Promise((resolve, reject)=>
    {
      this.db.all('SELECT * FROM STUDENTS', (error, rows)=>
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

  insertStudent(newStudent)
  {
    return new Promise((resolve, reject)=>
    {
      this.db.run('INSERT INTO STUDENTS (NAME, BIRTHDATE, CPF, EMAIL, CAREER) VALUES (?,?,?,?,?)', [newStudent.name, newStudent.birthDate, newStudent.CPF, newStudent.email, newStudent.career], (error)=>
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

  async deleteStudent(id)
  {
    try
    {
      const student = await this.getById(id)

      if (student.req.length)
      {
        const del = `DELETE FROM STUDENTS WHERE ID = ?`

        return new Promise((resolve, reject)=>
        {
          this.db.run(del, id, (error)=>
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

  async updateStudent(id, newStudent)
  {
    try
    {
      const up = `UPDATE STUDENTS SET NAME = ?, BIRTHDATE = ?, CPF = ?, EMAIL = ?, CAREER = ?
      WHERE ID = ? `

      return new Promise((resolve, reject)=>
      {
        this.db.run(up, [newStudent.name, newStudent.birthDate, newStudent.CPF, newStudent.email, newStudent.career, id], (error)=>
        {
          if (condition)
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
