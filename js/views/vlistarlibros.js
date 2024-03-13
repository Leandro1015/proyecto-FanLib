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
        
        this.base.addEventListener('click', this.borrarLibro.bind(this));
    }

    async borrarLibro(evento) {
        console.log('Entrando en borrarLibro');
        const target = evento.target;
        // Verificar si el clic fue en un botón de "Borrar"
        if (target.classList.contains('btn-borrar')) {
            const fila = target.closest('tr');
            const titulo = fila.querySelector('.titulo').textContent;
    
            // Mostrar diálogo de confirmación de borrado
            const confirmacion = confirm(`¿Estás seguro que deseas borrar el libro "${titulo}"?`);
            if (confirmacion) {
                try {
                    // Obtener el ID del libro a borrar
                    const id = fila.dataset.id;
    
                    // Realizar llamada AJAX-DELETE para borrar el libro
                    await this.restService2.borrarObra(id);
                    
                    // Actualizar la lista de libros después de borrar
                    this.listar();
    
                } catch (error) {
                    console.error('Error al borrar el libro:', error);
                    // Notificar al usuario sobre el error del servidor
                    alert('Hubo un error al intentar borrar el libro. Por favor, inténtalo de nuevo más tarde.');
                }
            }
        }
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
        const tbody = tablaLibros.querySelector('tbody')
    
        try {
            // Parsear el JSON antes de usarlo
            const data = JSON.parse(obras)
    
            // Limpiar las filas de tbody antes de agregar nuevas filas
            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild)
            }
    
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

                const columnaBorrar = document.createElement('td')
                const botonBorrar = document.createElement('button')
                botonBorrar.textContent = 'Borrar'
                botonBorrar.classList.add('btn-borrar')
                columnaBorrar.appendChild(botonBorrar)
                fila.appendChild(columnaBorrar)
    
                // Agregar la fila a tbody
                tbody.appendChild(fila)
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
