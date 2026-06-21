export class Crianca {
 id?: string;
 nome: string;
 dataNascimento: string;
 sexo: 'M' | 'F';

 constructor(dados: { id?: string, nome: string, dataNascimento: string, sexo: 'M' | 'F' }) {
  this.id = dados.id;
  this.nome = dados.nome;
  this.dataNascimento = dados.dataNascimento;
  this.sexo = dados.sexo;
 }

 idadeEmMeses(): number {
  const nascimento = new Date(this.dataNascimento);
  const hoje = new Date();
  let meses = (hoje.getFullYear() - nascimento.getFullYear()) * 12;

  meses += hoje.getMonth() - nascimento.getMonth();

  if (hoje.getDate() < nascimento.getDate()) {
   meses--;
  }
  return Math.max(meses, 0);
 }

 idadeFormatada(): string {
  const meses = this.idadeEmMeses();
  if (meses < 24) {
   return `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
  }
  const anos = Math.floor(meses / 12);
  return `${anos} ${anos === 1 ? 'ano' : 'anos'}`;
 }
}