class Student
{
  constructor(name, birthDate, CPF, email, career, registrationDate)
  {
    //chamada para validar dados
    this.validation(name, CPF, email)
    
    this.name = name   
    this.birthDate = birthDate
    this.CPF = CPF
    this.email = email
    this.career = career
    this.registrationDate = registrationDate
  }
  
  
  validation(name, CPF, email)
  {
    this.verifyName(name)
    this.verifyCPF(CPF)
    this.verifyEmail(email)
  }
  
  verifyName(name)
  {
    if (typeof name !== 'string')
    {
      throw new Error('Precisa ser uma string')
    }
    else
    {
      this.name = name
    }
  }
  
  verifyCPF(CPF)
  {
    const arrCPF = [...CPF]
    if (arrCPF[3] !== '.' || arrCPF[7] !== '.' || arrCPF[11] !== '-')
    {
      throw new Error('CPF inválido')
    }
    else
    {
      this.CPF = CPF
    }
  }
  
  verifyEmail(email)
  {
    if (email.indexOf('@' && '.com') < 0)
    {
      throw new Error('Email inválido')
    }
    else
    {
      this.email
    }
  }
}

module.exports = Student