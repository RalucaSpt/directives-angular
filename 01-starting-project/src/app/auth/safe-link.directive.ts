import { Directive } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfrimLeavePage($event)'
  }
})
export class SafeLinkDirective {

  constructor() {
    console.log('SafeLinkDirective is active');
   }

   onConfrimLeavePage(event: MouseEvent){
     const wantsToLeave = window.confirm('Are you sure you want to leave?');

     if(wantsToLeave){
       return;
   }
    event.preventDefault();
  }
}
