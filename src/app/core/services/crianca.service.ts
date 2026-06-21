import { Injectable, inject } from "@angular/core";
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Crianca } from "../models/crianca.model";

@Injectable({ providedIn: 'root' })
export class CriancaService {
 private firestore = inject(Firestore);
 private colecao = collection(this.firestore, 'criancas');

 listar(): Observable<Crianca[]> {
  return collectionData(this.colecao, { idField: 'id' }).pipe(
   map(docs => docs.map(d => new Crianca(d as any)))
  )
 }

 buscarPorId(id: string): Observable<Crianca> {
  const ref = doc(this.firestore, `criancas/${id}`);
  return docData(ref, { idField: 'id' }).pipe(
   map(d => new Crianca(d as any))
  )
 }

 async adicionar(dados: { nome: string, dataNascimento: string, sexo: 'M' | 'F' }): Promise<string> {
  const ref = await addDoc(this.colecao, dados);
  return ref.id;
 }

 async atualizar(id: string, dados: Partial<{ nome: string; dataNascimento: string; sexo: 'M' | 'F' }>): Promise<void> {
  await updateDoc(doc(this.firestore, `criancas/${id}`), dados);
 }

 async remover(id: string): Promise<void> {
  await deleteDoc(doc(this.firestore, `criancas/${id}`));
 }
}