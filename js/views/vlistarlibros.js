import { Vista } from './vista.js'

export class ListarLibros extends Vista{
    constructor(controlador, base) {
        super(controlador, base)

        this.altaLibro = this.base.querySelectorAll('button')[0] // Botón para añadir un nuevo libro
        this.irInicio = this.base.querySelectorAll('button')[1] // Botón para volver al menú principal

        this.altaLibro.onclick = this.pulsarAltaLibro.bind(this)
        this.irInicio.onclick = this.pulsarVolverInicio.bind(this)
    }

    pulsarAltaLibro() {
        this.controlador.verVista(Vista.valtalibro) // Cambia a la vista para insertar un nuevo libro
    }
    
    pulsarVolverInicio() {
        this.controlador.verVista(Vista.vinicio) // Cambia a la vista del menú principal
    }
}
