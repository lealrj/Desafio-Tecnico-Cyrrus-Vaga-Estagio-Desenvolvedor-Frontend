import { Injectable, inject } from "@angular/core";
import { Firestore, collection, collectionData, doc, query, updateDoc, where, writeBatch } from '@angular/fire/firestore';
import { RegistroVacinacao } from "../models/registro-vacinacao.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Crianca } from "../models/crianca.model";
import { Vacina } from "../models/vacina.model";

@Injectable({ providedIn: 'root' })
export class RegistroVacinacaoService {
 private firestore = inject(Firestore);
 private colecao = collection(this.firestore, 'registrosVacinacao');

 listarPorCrianca(criancaId: string): Observable<RegistroVacinacao[]> {
  const q = query(this.colecao, where('criancaId', '==', criancaId));
  return collectionData(q, { idField: 'id' }).pipe(
   map(docs => docs.map(d => new RegistroVacinacao(d as any)))
  );
 }

 async gerarCalendarioParaCrianca(crianca: Crianca, catalogo: Vacina[]): Promise<void> {
  const batch = writeBatch(this.firestore);
  for (const vacina of catalogo) {
   const dataPrevista = new Date(crianca.dataNascimento);
   dataPrevista.setMonth(dataPrevista.getMonth() + vacina.idadeRecomendadaMeses);
   const novoDoc = doc(this.colecao);
   batch.set(novoDoc, {
    criancaId: crianca.id,
    vacinaId: vacina.id,
    dataPrevista: dataPrevista.toISOString().split('T')[0],
   });
  }
  await batch.commit();
 }

 async marcarComoAplicada(registroId: string, dataAplicacao: string, observacoes?: string): Promise<void> {
  await updateDoc(doc(this.firestore, `registrosVacinacao/${registroId}`), {
   dataAplicacao,
   ...(observacoes ? { observacoes } : {}),
  });
 }
}