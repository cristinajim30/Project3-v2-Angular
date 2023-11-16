import { Injectable } from '@angular/core';
import { Operations } from '../models/operations.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private operationsList: Operations[];
  constructor() {
    this.operationsList = [];
   }

  //add one Operation'sobject to the array
  addOperation(operation: Operations): void {
    this.operationsList.push(operation);
  }

  getOperations(): Operations[] {
    return this.operationsList.slice();
  }

  deleteOperationById(id: string): void {
    //create a new array by removing the record passed by parameter
    this.operationsList = this.operationsList.filter(operation => operation.id !== id);
  }
}
