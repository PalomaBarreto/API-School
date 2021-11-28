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
}

module.exports = StudentDAO
