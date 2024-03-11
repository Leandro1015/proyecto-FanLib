import { Vista } from './vista.js'
import { Rest } from '../service/rest.js'

export class ListarLibros extends Vista {
    constructor(controlador, base) {
        super(controlador, base)

        this.altaLibro = this.base.querySelector('#btnAnadirLibro') // Botón para añadir un nuevo libro
        this.irInicio = this.base.querySelector('#volverInicio') // Botón para volver al menú principal

        this.altaLibro.onclick = this.pulsarAltaLibro.bind(this)
        this.irInicio.onclick = this.pulsarVolverInicio.bind(this)
    
        this.restService2 = new Rest()

        this.listarObras()
    }

    async listarObras() {
        try {
            const obras = await this.restService2.listarObras() // Llama al método listarObras() del objeto restService2
            this.mostrarLibros(obras) // Llama al método mostrarLibros() con la lista de obras obtenida
        } catch (error) {
            console.error('Error al obtener las obras:', error)
        }
    }
   
    mostrarLibros(libros) {
        console.log('El método mostrarLibros() se está ejecutando.')
    
        const tablaLibros = document.getElementById('tablaLibros')
    
        // Limpiar el contenido de la tabla
        tablaLibros.innerHTML = ''
    
        // Iterar sobre la lista de libros y agregar cada uno a la tabla
        libros.forEach(libro => {
            const fila = document.createElement('tr')
    
            // Crear las celdas para cada atributo del libro
            const columnaTitulo = document.createElement('td')
            columnaTitulo.textContent = libro.titulo
            fila.appendChild(columnaTitulo)
    
            const columnaAnio = document.createElement('td')
            columnaAnio.textContent = libro.anio_publicacion
            fila.appendChild(columnaAnio)
    
            const columnaISBN = document.createElement('td')
            columnaISBN.textContent = libro.isbn
            fila.appendChild(columnaISBN)
    
            // Agregar la fila a la tabla
            tablaLibros.appendChild(fila)
        })
    }
    

    pulsarAltaLibro() {
        this.controlador.verVista(Vista.valtalibro) // Cambia a la vista para insertar un nuevo libro
    }

    pulsarVolverInicio() {
        this.controlador.verVista(Vista.vinicio) // Cambia a la vista del menú principal
    }
}
