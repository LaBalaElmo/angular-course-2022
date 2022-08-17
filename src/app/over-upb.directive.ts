import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[overUpb]'
})
export class OverUpbDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}
