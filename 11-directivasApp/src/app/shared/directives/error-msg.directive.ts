import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = 'No hay nada';
  

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
    
  }

  ngOnInit(): void {
    console.log('Directive-oninit')
    this.setColor()
    this.setMensaje()
  }

  setColor():void {

    this.htmlElement.nativeElement.style.color = this.color
    this.htmlElement.nativeElement.classList.add("form-text");
    

  }

  setMensaje(): void{
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
