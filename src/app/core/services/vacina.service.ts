import { inject, Injectable } from "@angular/core";
import { Firestore, collection, collectionData, getDocs, addDoc } from '@angular/fire/firestore';
import { Observable } from "rxjs";
import { Vacina } from "../models/vacina.model";
import { CALENDARIO_VACINAL } from "./calendario-vacinal.data";


@Injectable({ providedIn: 'root' })
export class VacinaService {
 private firestore = inject(Firestore);
 private colecao = collection(this.firestore, 'vacinas');

 listar(): Observable<Vacina[]> {
  return collectionData(this.colecao, { idField: 'id' }) as Observable<Vacina[]>;
 }

 async semearCatalogoSeVazio(): Promise<void> {
  const snapshot = await getDocs(this.colecao);
  if (!snapshot.empty) return;
  for (const vacina of CALENDARIO_VACINAL) {
   await addDoc(this.colecao, vacina);
  }
 }
}