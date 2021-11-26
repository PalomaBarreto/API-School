class Student
{
  constructor(name, birthDate, CPF, email, career)
  {
    this.name = name
    this.birthDate = birthDate
    this.CPF = CPF
    this.email = email
    this.career = career
    this.registrationDate = Date.now()
  }
}

module.exports = Student