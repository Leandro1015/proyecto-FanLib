import {Vista} from './vista.js';
import {Rest} from '../service/rest.js';
import {Inicio} from './vinicio.js';


export class AltaLibro extends Vista {
    constructor(controlador, base) {
        super(controlador, base);

        this.restService = new Rest();
        this.inicioObjeto = new Inicio(controlador, base);

        const buttons = this.base.querySelectorAll('button');
        this.agregarLibro = buttons[0];
        this.irInicio = buttons[1];

        this.agregarLibro.onclick = this.pulsarAgregarLibro.bind(this);
        this.irInicio.onclick = this.pulsarIrInicio.bind(this);

    }

    pulsarIrInicio() {
        this.controlador.verVista(Vista.vinicio);
    }
}