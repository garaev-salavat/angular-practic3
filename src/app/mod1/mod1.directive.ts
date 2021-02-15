import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMod1]'
})
export class Mod1Directive {

  constructor(private element: ElementRef) {
    element.nativeElement.style.fontSize = '30px';
   }

}
