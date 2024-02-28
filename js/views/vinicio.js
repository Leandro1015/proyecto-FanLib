import { Vista } from './vista.js'

export class Inicio extends Vista {

    constructor (controlador, base) {
        super(controlador, base)

        // Coger referencias del interfaz
        this.irLibros = this.base.querySelectorAll('button')[0]
        this.irAutores = this.base.querySelectorAll('button')[1]

        // Asociar eventos
        this.irLibros.onclick = this.pulsarIrLibros.bind(this)
        this.irAutores.onclick =  this.pulsarIrAutores.bind(this)

    }

    pulsarIrLibros () {
        this.controlador.verVista(Vista.vlistarlibros)
    }

    pulsarIrAutores () {
        this.controlador.verVista(Vista.vlistarautores)
    }
}