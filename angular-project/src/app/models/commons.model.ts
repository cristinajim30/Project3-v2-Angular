import { DatePipe } from '@angular/common';

export class Commons {
    /**Common constants for transactions*/
      static readonly POINTS_EASY_ADD: number = 10;
      
        pipe = new DatePipe('en-US');
        datetimeWithPipe:any = null;

        getDate(): any{
            return this.pipe.transform(Date.now(), 'EEEE, M/d/yy, hh:mm:ss a');
        }
  
  
  }