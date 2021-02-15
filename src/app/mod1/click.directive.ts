import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  @HostListener("click")
  onClick () {
      console.log ('click')
  }

  constructor() { }




}
