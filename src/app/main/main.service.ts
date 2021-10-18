import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  dadosSubject: BehaviorSubject<Dados> = new BehaviorSubject({conta_aplicacao:'', cpf_cli:'', id:0, nome:'', num_conta_aplicacao:'', num_conta_corrente:'', sit_cpf:''});
  showButtonFooter: boolean = false;
  constructor(public httpClient: HttpClient) { }

  get(cpf: string): Observable<Dados[]> {
    return this.httpClient.get<Dados[]>(`http://localhost:3000/contas?cpf_cli=${cpf}`);
  }

}

export interface Dados {
  id: number,
  nome: string,
  cpf_cli: string,
  sit_cpf: string,
  conta_aplicacao: string,
  num_conta_aplicacao: string,
  num_conta_corrente: string
}
