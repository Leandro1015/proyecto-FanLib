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

        this.listar()
    }

    async listar() {
        try {
            let obras
            try {
                obras = await this.restService2.listarObras()
            } catch (error) {
                console.error('Error al obtener las obras desde el servicio REST:', error)
            }
            this.mostrarLibros(obras)
        } catch (error) {
            console.error('Error al listar las obras:', error)
        }
    }

    async mostrarLibros(obras) {
        const tablaLibros = document.getElementById('tablaLibros')
    
        try {
            // Parsear el JSON antes de usarlo
            const data = JSON.parse(obras)
    
            // Iterar sobre la lista de obras y agregar cada una a la tabla
            data.forEach(obra => {
                const fila = document.createElement('tr')
    
                // Crear las celdas para cada atributo de la obra
                const columnaTitulo = document.createElement('td')
                columnaTitulo.textContent = obra.titulo
                fila.appendChild(columnaTitulo)
    
                const columnaAnio = document.createElement('td')
                columnaAnio.textContent = obra.anio_publicacion
                fila.appendChild(columnaAnio)
    
                const columnaISBN = document.createElement('td')
                columnaISBN.textContent = obra.isbn
                fila.appendChild(columnaISBN)
    
                // Agregar la fila a la tabla
                tablaLibros.appendChild(fila)
            })
        } catch (error) {
            console.error('Error al parsear el JSON:', error)
        }
    }
    
    
    pulsarAltaLibro() {
        this.controlador.verVista(Vista.valtalibro) // Cambia a la vista para insertar un nuevo libro
    }

    pulsarVolverInicio() {
        this.controlador.verVista(Vista.vinicio) // Cambia a la vista del menú principal
    }
}
