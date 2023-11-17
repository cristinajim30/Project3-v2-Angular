import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../../services/transactions.service';
import { Commons } from '../../models/commons.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  public idTrans = '';
  transactionDetail: any;
  tableColumns: string[] = ['id', 'amount', 'balance', 'label', 'description', 'date'];
  // Variable to subscribe to the param coming from routing
  private sub: any;

  constructor (private route: ActivatedRoute, public service: TransactionsService) {
  }

  //new object of the Commons Class
  icommon: Commons = new Commons;
  datetime:any = null;
  
   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idTrans = params['id'];
      //console.log("id: ", this.id);
    });
    this.datetime= this.icommon.getDate();
    
    this.getDetails();
    //this.getKeys();
    //this.readTable();
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getDetails(): void {
    this.service.getTransactionById(this.idTrans).subscribe((data: any) => {
      this.transactionDetail = data;
      console.log(this.transactionDetail);
      
    }, error => {
      console.error('Error al cargar el JSON:', error);
    }
    );

    
  }
  getKeys(){
    if (typeof this.transactionDetail === 'object') {
      // Accedemos a las claves del primer objeto en el array
      this.tableColumns = Object.keys(this.transactionDetail);
      console.log("keys: " ,this.tableColumns);
    }
  }
  readTable():void{
    console.log('Hola');
    
    console.log('item ',this.transactionDetail.id);
   
  }
}
