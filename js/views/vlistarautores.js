import { Vista } from './vista.js'

export class ListarAutores extends Vista{
    constructor(controlador, base) {
        super(controlador, base)
  
        this.anadirAutor = this.base.querySelectorAll('button')[0] // Botón para añadir un nuevo autor
        this.volverInicio = this.base.querySelectorAll('button')[1] // Botón para volver al menú principal

        this.anadirAutor.onclick = this.pulsarAltaAutor.bind(this) 
        this.volverInicio.onclick = this.pulsarVolverInicio.bind(this)
    }

   pulsarAltaAutor() {
        this.controlador.verVista(Vista.valtaautor) // Cambia a la vista para insertar un nuevo autor
    }

   pulsarVolverInicio() {
       this.controlador.verVista(Vista.vinicio) // Cambia a la vista del menú principal
    }
}