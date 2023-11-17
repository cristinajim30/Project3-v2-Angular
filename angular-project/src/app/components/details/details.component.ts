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

  constructor (private route: ActivatedRoute, public service: TransactionsService) {}

  //new object of the Commons Class
  icommon: Commons = new Commons;
  datetime:any = null;
  
   ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idTrans = params['id'];
    });

    this.datetime= this.icommon.getDate();
    this.getDetails();
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getDetails(): void {
    this.service.getTransactionById(this.idTrans).subscribe((data: any) => {
      this.transactionDetail = data;
      
    }, error => {
      console.error('Error loading JSON:', error);
    }
    );
  }
  
}
