import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveOne]'
})
export class DirectiveOneDirective {

  constructor(private el:ElementRef,private rander:Renderer2) {
    // this.rander.setStyle(this.el.nativeElement,'backgroundColor','red')
   }


  @HostListener('mouseover') MeClick(){
    this.rander.setStyle(this.el.nativeElement,'backgroundColor','lightgray')
  }

  @HostListener('mouseout') MouseOut(){
    this.rander.setStyle(this.el.nativeElement,'backgroundColor','white')
  }
  @HostListener('click') clicmethod(){
    this.rander.setStyle(this.el.nativeElement,'backgroundColor','lime')
  }
  

  ColorMethod(Color:string){
    this.rander.setStyle(this.el.nativeElement,'backgroundColor',Color);
  }

}
