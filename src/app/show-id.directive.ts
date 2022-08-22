import {Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[showID]'
})
export class ShowIDDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.viewContainer.createEmbeddedView(this.templateRef)


  }

  @HostListener('mouseleave') onMouseLeave(event: any){
    this.viewContainer.clear()
  }


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private element: ElementRef
  ) { }

}
