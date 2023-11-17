import { Component } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { DatePipe } from '@angular/common';
import { Commons } from '../../models/commons.model';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.css'
})
export class Exercise3Component {
  transactionList: any[] = [];
  tableColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];
  sortKey: string = '';
  reverse: boolean = false;

  constructor(private transService: TransactionsService) {}
  //new object of the Commons Class
  icommon: Commons = new Commons;
  datetime:any = null;
  
  ngOnInit(): void {
    this.datetime= this.icommon.getDate();
    this.getTransactions();
  }

  getTransactions():void{
    this.transService.getJsonData().subscribe((data: any[]) => {
      this.transactionList = data;
    }, error => {
      console.error('Error loading JSON:', error);
    }
    );
  }
  sortTable(key: string){
    //function to sort table in ascending or descending order by key name
    this.reverse = this.sortKey === key ? !this.reverse : false;
    this.sortKey = key;
    this.transactionList.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return this.reverse ? (x > y ? -1 : 1) : (x < y ? -1 : 1)
    });
  }
  
}
