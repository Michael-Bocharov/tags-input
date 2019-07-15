import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appSkipSpace]'
})
export class SkipSpaceDirective {
  private spaceCharCode = 32;
  constructor() { }
  @HostListener('keypress', ['$event'])
  onKeyPress(event) {
    if (event.charCode === this.spaceCharCode) {
      event.preventDefault();
    }
  }
}
