import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  constructor() { 
    console.log('Directive')
  }


  ngOnInit(): void {
    console.log('Directive-oninit')
  }

}
