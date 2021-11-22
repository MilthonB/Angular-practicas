import { nombreString } from './string';


describe('Pruebas de string ', () => {

    it('Debe de ser string', () => {
        const nombre = 'Samarripa';
        const resp = nombreString(nombre);
        
        expect(resp).toBe('string');

    });

    it('Debe de contener un nombre', () => {
        const nombre = 'Samarripa';
        const resp = nombreString(nombre);
        
        expect(resp).toContain(nombre);

    });



});