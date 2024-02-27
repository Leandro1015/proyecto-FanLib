import { Vista } from './vista.js'

export class Portada extends Vista {
    constructor(controlador, base) {
        super(controlador, base)
        this.mostrarPortada()
    }

    // Método para mostrar la portada
    mostrarPortada() {
        const portada = new Image() // Se crea un nuevo elemento de imagen
        portada.src = 'img/portada.avif' // Se establece la fuente de la imagen
        this.base.appendChild(portada) // Se agrega la imagen al elemento base de la vista
    }
}