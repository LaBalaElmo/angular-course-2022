import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[showID]'
})
export class ShowIdDirective {
  @Output() showID = new EventEmitter();

  @HostListener('mouseenter') onMouseenter() {
    this.showID.emit(true)
  }

  @HostListener('mouseleave') onMouseleave() {
    this.showID.emit(false);
  }

  constructor() { }

}
