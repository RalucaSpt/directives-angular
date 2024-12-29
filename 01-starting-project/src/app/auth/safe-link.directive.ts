import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfrimLeavePage($event)'
  }
})
export class SafeLinkDirective {
  queryParam = input('myapp', {alias: 'appSafeLink'});
  private hostAddress =  inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('SafeLinkDirective is active');
   }

   onConfrimLeavePage(event: MouseEvent){
     const wantsToLeave = window.confirm('Are you sure you want to leave?');

     if(wantsToLeave){
      const address = this.hostAddress.nativeElement.href;
      this.hostAddress.nativeElement.href = address + '?from=' + this.queryParam();
       return;
   }
    event.preventDefault();
  }
}
