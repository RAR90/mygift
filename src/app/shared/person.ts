export class Person {

  nome: string;
  idade: string;
  email: string;
  telefone: string;
  cidade: string;
  logradouro: string;
  cpf: string;

  constructor(
    nome: string,
    idade: string,
    email: string,
    telefone: string,
    cidade: string,
    logradouro: string,
    cpf: string
  ) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
      this.telefone = telefone;
      this.cidade = cidade;
      this.logradouro = logradouro;
      this.cpf = cpf;
  }
}
