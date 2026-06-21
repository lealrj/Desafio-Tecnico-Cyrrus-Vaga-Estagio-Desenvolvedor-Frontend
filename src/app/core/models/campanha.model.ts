export class Campanha {
 id?: string;
 titulo: string;
 descricao: string;
 publicoAlvo: string;
 dataInicio: string;
 dataFim: string;

 constructor(dados: {
  id?: string,
  titulo: string,
  descricao: string,
  publicoAlvo: string,
  dataInicio: string,
  dataFim: string
 }) {
  this.id = dados.id;
  this.titulo = dados.titulo;
  this.descricao = dados.descricao;
  this.publicoAlvo = dados.publicoAlvo;
  this.dataInicio = dados.dataInicio;
  this.dataFim = dados.dataFim;
 }

 estaAtiva(): boolean {
  const hoje = new Date();
  return hoje >= new Date(this.dataInicio) && hoje <= new Date(this.dataFim);
  
 }
}
