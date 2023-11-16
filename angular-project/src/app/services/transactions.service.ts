import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  public transactionsUrl = 'assets/data/transactions.json';
  constructor(private http: HttpClient) {}

  //subscribe to the Observable to receive and manage the response asynchronously
  getJsonData(): Observable<any> {
    return this.http.get<any[]>(this.transactionsUrl);

  }
}
