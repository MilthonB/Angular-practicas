import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{


    transform(value: string, esMayusculas: boolean = true): string {
        return (esMayusculas) 
                    ? value.toUpperCase() 
                    : value.toLowerCase();
    }

}