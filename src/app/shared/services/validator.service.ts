import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    public regexNombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public regexEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

    constructor(){}

    public noPuedeSerStrider = (control: FormControl): ValidationErrors | null => {
        const valor = control.value?.trim().toLowerCase();
        if (valor === 'strider') {
            return {
                noStrider: true
            }
        }
        return null;
    }

    public camposIguales(campo1: string, campo2: string){
        return (formGroup: AbstractControl): ValidationErrors | null => {
            
            const c1 = formGroup.get(campo1)?.value;
            const c2 = formGroup.get(campo2)?.value;

            if (c1 !== c2) {
                formGroup.get(campo2)?.setErrors({noIguales: true});
                return  {noIguales: true}
            }
            formGroup.get(campo2)?.setErrors(null);
            return null;
        
        }
    }
}