import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[showID]'
})
export class ShowIDDirective {
  @Input() set showID(value: string){
    //this.element.nativeElement.
  }


  constructor(
    private element: ElementRef
  ) { }

}
