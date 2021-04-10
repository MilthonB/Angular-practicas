import { Component, Input, InputDecorator } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent  {


  @Input() public albums: any[] = [];
  @Input() artistas: any[] = [];




  constructor() { }

 

}
