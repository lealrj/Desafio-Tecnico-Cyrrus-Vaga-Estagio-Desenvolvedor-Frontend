import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Campanha } from '../models/campanha.model';

@Injectable({ providedIn: 'root' })
export class CampanhaService {
 private firestore = inject(Firestore);
 private colecao = collection(this.firestore, 'campanhas');

 listar(): Observable<Campanha[]> {
  return collectionData(this.colecao, { idField: 'id' }).pipe(
   map(docs => docs.map(d => new Campanha(d as any)))
  );
 }

 async semearExemplosSeVazio(): Promise<void> {
  const snapshot = await getDocs(this.colecao);
  if (!snapshot.empty) return;
  const hoje = new Date();
  const daquiA30 = new Date();
  daquiA30.setDate(hoje.getDate() + 30);
  const exemplos = [
   { titulo: 'Campanha Nacional de Multivacinação', descricao: 'Atualize a caderneta de crianças e adolescentes com vacinas em atraso.', publicoAlvo: 'Crianças de 0 a 14 anos', dataInicio: hoje.toISOString().split('T')[0], dataFim: daquiA30.toISOString().split('T')[0] },
   { titulo: 'Campanha contra a Influenza', descricao: 'Vacinação contra a gripe para crianças pequenas.', publicoAlvo: 'Crianças de 6 meses a 5 anos', dataInicio: hoje.toISOString().split('T')[0], dataFim: daquiA30.toISOString().split('T')[0] },
  ];
  for (const c of exemplos) await addDoc(this.colecao, c);
 }
}