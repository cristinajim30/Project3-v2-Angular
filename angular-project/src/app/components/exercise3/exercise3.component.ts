import { Component } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.css'
})
export class Exercise3Component {
  transactionList: any[] = [];
  tableColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];
  constructor(private transService: TransactionsService) {}
  ngOnInit(): void {
    this.getTransactions();
    //console.log("ngOnInit");
    
  }

  getTransactions():void{
    this.transService.getJsonData().subscribe((data: any[]) => {
      this.transactionList = data;
      //console.log(this.transactionList); 
    }, error => {
      console.error('Error al cargar el JSON:', error);
    }
    );
  }
}
