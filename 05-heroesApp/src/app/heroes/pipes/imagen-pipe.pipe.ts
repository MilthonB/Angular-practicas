import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return ( heroe.id ) ?  `assets/heroes/${ heroe.id }.jpg`: 'assets/no-image.png';
  }

}
