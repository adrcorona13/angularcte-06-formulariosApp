import { FormControl } from "@angular/forms";

export const regexNombreApellido: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const regexEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSerStrider = (control: FormControl) => {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
        return {
            noStrider: true
        }
    }
    return null;
}