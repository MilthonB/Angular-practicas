import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _mensaje: string =' Este campo es reqierodo '

  @Input() set color (valor: string) {
    this._color = valor;
  }
  
  @Input() set mensaje (valor: string){
    this._mensaje = valor;
  } 
  
  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
    
  }

  ngOnInit(): void {
    this.setClass();
  }

  setClass(){
    this.htmlElement.nativeElement.classList.add("form-text");
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}