class Student
{
  constructor(name, birthDate, CPF, career)
  {
    this.name = name
    this.birthDate = birthDate
    this.CPF = CPF
    this.career = career
    this.registrationDate = Date.now()
  }
}

module.exports = Student