import { DatePipe } from '@angular/common';

export class Commons {
    /**Common constants for transactions*/
      
    pipe = new DatePipe('en-US');
    datetimeWithPipe:any = null
    /*function to return the current date */
    getDate(): any{
        return this.pipe.transform(Date.now(), 'EEEE, M/d/yy, hh:mm:ss a');
    }
  
  
  }