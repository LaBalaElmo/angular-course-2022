import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[upb]'
})
export class UpbDirective implements OnInit{

  @Input() upb: boolean = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(){
    if(this.upb){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }else {
      this.viewContainer.clear()
    }
  }

}
