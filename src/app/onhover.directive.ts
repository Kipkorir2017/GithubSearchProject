import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appOnhover]'
})
export class OnhoverDirective {
  

  constructor(private elem:ElementRef) {}
    @HostListener('mouseover') onOver() {
      this.elem.nativeElement.style.backgroundColor = 'black';
      this.elem.nativeElement.style.color="white"
    }
   

}
