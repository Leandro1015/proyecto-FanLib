import { Vista } from './vista.js'
import { Rest } from '../service/rest.js'

export class ListarLibros extends Vista {
    constructor(controlador, base) {
        super(controlador, base)

        this.altaLibro = this.base.querySelector('#btnAnadirLibro') // Botón para añadir un nuevo libro
        this.irInicio = this.base.querySelector('#volverInicio') // Botón para volver al menú principal

        this.altaLibro.onclick = this.pulsarAltaLibro.bind(this)
        this.irInicio.onclick = this.pulsarVolverInicio.bind(this)

        this.restService = new Rest()

        this.mostrarLibros
    }

    mostrarLibros(libros) {
        console.log('holA')
        console.log(libros)

        const listaLibros = document.getElementById('listaLibros')
        listaLibros.innerHTML = ''
    
        // Iterar sobre la lista de libros y agregar cada uno a la lista
        libros.forEach(libro => {
            const itemLibro = document.createElement('li')
            itemLibro.textContent = `${libro.titulo} - ${libro.anio_publicacion} - ISBN: ${libro.isbn}`
            listaLibros.appendChild(itemLibro)
        })
    }

    pulsarAltaLibro() {
        this.controlador.verVista(Vista.valtalibro) // Cambia a la vista para insertar un nuevo libro
    }

    pulsarVolverInicio() {
        this.controlador.verVista(Vista.vinicio) // Cambia a la vista del menú principal
    }
}
