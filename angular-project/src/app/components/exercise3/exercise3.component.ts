import { Component } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.css'
})
export class Exercise3Component {
  transactionList: any[] = [];
  tableColumns: string[] = ['id', 'amount', 'balance', 'label', 'date'];
  constructor(private transService: TransactionsService) {}
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  datetimeWithPipe:any = null;
  ngOnInit(): void {
    this.datetimeWithPipe = this.pipe.transform(Date.now(), 'EEEE, M/d/yy, hh:mm:ss a');
    
    console.log("fecha: ", this.datetimeWithPipe);
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
  sortTable(colunmName: string){
    console.log("column: ", colunmName);
  }
}
