import { Pipe, PipeTransform } from '@angular/core';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

@Pipe({
    name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform{
    // dato | pipe
    transform(value:any, value_two:any){
        let operaciones = `
            Suma: ${value+value_two} -
            Resta: ${value-value_two} -
            Multiplicación: ${value*value_two} -
            División: ${value/value_two}
        `;

        return operaciones;
    }
}