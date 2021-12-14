import { Injectable } from '@angular/core';
import { Facture } from '../model/facture.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  apiURL: string =  'http://localhost:8088/SpringMVC/servlet/retrieve-all-facture-true';
  apiURL2: string = 'http://localhost:8088/SpringMVC/servlet/add-Facture';
  apiURL3: string = 'http://localhost:8088/SpringMVC/servlet/delete-by-state-facture';
  apiURL4: string = 'http://localhost:8088/SpringMVC/servlet/modify-Facture';
  apiURL5: string = 'http://localhost:8088/SpringMVC/servlet/modify-Factures';
  apiURL6: string = 'http://localhost:8088/SpringMVC/servlet/retrieveAllFacturess/';
  apiURL7: string =  'http://localhost:8088/SpringMVC/servlet/retrieve-all-facture-false';





  factures?: Facture[]; //un tableau de chînes de caractères
  facture?: Facture;

  constructor(private http: HttpClient) {
  }

  listeFacture(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.apiURL, httpOptions);
  }
  listeFacture2(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.apiURL7, httpOptions);
  }

  ajouterFacture(prod: Facture): Observable<Facture> {
    return this.http.post<Facture>(this.apiURL2, prod, httpOptions);
  }

  deleteFacture(id: number) {
    const url = `${this.apiURL3}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterFacture(id: number): Observable<Facture> {
    const url = `${this.apiURL6}/${id}`;
    return this.http.get<Facture>(url, httpOptions);
  }
  UpdateStock(data: Facture): Observable<Facture> {
    return this.http.put<Facture>(
      
      this.apiURL5 +'/'+ data.idFacture,
      data
    );
  }

  updateFacture(prod: Facture): Observable<Facture> {
    return this.http.put<Facture>(this.apiURL4, prod, httpOptions);
  }

  trierFactures() {
    this.factures = this.factures!.sort((n1, n2) => {
      if (n1.idFacture > n2.idFacture) {
        return 1;
      }
      if (n1.idFacture < n2.idFacture) {
        return -1;
      }
      return 0;
    });
  }


}
