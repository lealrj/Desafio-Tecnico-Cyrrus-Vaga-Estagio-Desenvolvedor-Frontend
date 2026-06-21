export type StatusVacina = 'aplicada' | 'pendente' | 'atrasada';

export class RegistroVacinacao {
 id?: string;
 criancaId: string;
 vacinaId: string;
 dataPrevista: string;
 dataAplicacao?: string;
 observacoes?: string;

 constructor(dados: {
  id?: string,
  criancaId: string,
  vacinaId: string,
  dataPrevista: string,
  dataAplicacao?: string,
  observacoes?: string
 }) {
  this.id = dados.id;
  this.criancaId = dados.criancaId;
  this.vacinaId = dados.vacinaId;
  this.dataPrevista = dados.dataPrevista;
  this.dataAplicacao = dados.dataAplicacao;
  this.observacoes = dados.observacoes;
 }

 calcularStatus(toleranciaDias: number = 30): StatusVacina {
  if (this.dataAplicacao) {
   return 'aplicada';
  }

  const hoje = new Date();
  const limite = new Date(this.dataPrevista);
  limite.setDate(limite.getDate() + toleranciaDias);

  return hoje > limite ? 'atrasada' : 'pendente';
 }
}