import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomStyle]'
})
export class MyCustomStyleDirective {

  constructor(private e1:ElementRef) {
    e1.nativeElement.style.color='orange';
   }

}
