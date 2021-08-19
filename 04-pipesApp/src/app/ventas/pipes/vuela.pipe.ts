import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {


    transform( valor : boolean ){
        return  valor ? 'Sí vuela': 'No vuela'; 
    }

}