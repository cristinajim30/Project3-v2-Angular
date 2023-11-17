import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  public transactionsUrl = 'assets/data/transactions.json';
  public genericUrl = 'assets/data/';
  public format = '.json';
  constructor(private http: HttpClient) {}

  //subscribe to the Observable to receive and manage the response asynchronously
  getJsonData(): Observable<any> {
    return this.http.get<any[]>(this.transactionsUrl);

  }
  getTransactionById(id: string):Observable<any[]> {
    return this.http.get<any[]>(this.genericUrl + id + this.format);
  }
}
