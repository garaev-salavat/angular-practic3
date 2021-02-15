import { HostBinding } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {
  @HostBinding('style.fontWeight')
  bold = 'bold';
}
