import { Vista } from './vista.js'
import { Rest } from '../service/rest.js'

export class AltaLibro extends Vista {
    /**
     * Constructor de la clase AltaLibro.
     * 
     * @param {object} controlador - El controlador de la aplicación.
     * @param {object} base - La base de datos.
     */
    constructor(controlador, base) {
        super(controlador, base)

        // Acceder a los elementos del formulario
        this.titulo = document.getElementById('titulo')
        this.anio_publicacion = document.getElementById('anio_publicacion')
        this.isbn = document.getElementById('isbn')
        
        // Agregar evento de clic al botón "Insertar Libro"
        const botonInsertar = document.querySelector('#divInsertarLibros button')
        botonInsertar.addEventListener('click', this.validarFormulario.bind(this))

        this.restService = new Rest()

        this.irLibros = this.base.querySelectorAll('button')[0]
        this.irLibros.onclick = this.pulsarIrLibros.bind(this) 
    }

    /**
     * Valida el formulario de inserción de libros.
    */
    async validarFormulario() {
        // Reiniciar el contenido del div de errores
        const divErrores = document.getElementById('errores')
        divErrores.innerHTML = ''
        divErrores.style.display = 'none' // Ocultar el div de errores inicialmente

        // Realizar las validaciones
        if (this.titulo.value.trim().length < 4) {
            this.mostrarError('El título debe tener al menos 4 caracteres.')
            this.titulo.classList.add('input-error')
        } 
        else {
            this.titulo.classList.remove('input-error')
            this.titulo.classList.add('input-correct')
        }
    
        const anioNumerico = parseInt(this.anio_publicacion.value.trim())
        const añoActual = new Date().getFullYear()
    
        if (isNaN(anioNumerico) || anioNumerico < 1500 || anioNumerico > añoActual) {
            this.mostrarError('El año debe estar entre 1500 y ' + añoActual + '.')
            this.anio_publicacion.classList.add('input-error')
        } 
        else {
            this.anio_publicacion.classList.remove('input-error')
            this.anio_publicacion.classList.add('input-correct')
        }
    
        if (!/^\d{10}$/.test(this.isbn.value.trim())) {
            this.mostrarError('El ISBN debe tener exactamente 10 dígitos numéricos.')
            this.isbn.classList.add('input-error')
        } 
        else {
            this.isbn.classList.remove('input-error')
            this.isbn.classList.add('input-correct')
        }

        // Construir el objeto con los atributos del formulario
        const obra = {
            titulo: this.titulo.value.trim(),
            anio_publicacion: this.anio_publicacion.value.trim(),
            isbn: this.isbn.value.trim()
        }

        try {
            // Insertar el libro
            await this.restService.crearObra(obra)
            console.log('Libro insertado exitosamente.')
            
            // Después de insertar el libro, actualizar la tabla de la vista ListarLibros
            const listarLibros = this.controlador.vistas.get(Vista.vlistarlibros)
            listarLibros.listar()

            // Limpiar los campos del formulario
            this.titulo.value = ''
            this.anio_publicacion.value = ''
            this.isbn.value = ''

        } catch (error) {
            console.error('Error al insertar el libro:', error)
        }
    }

    /**
     * Muestra un mensaje de error en el formulario.
     * 
     * @param {string} mensaje - El mensaje de error a mostrar.
    */
    mostrarError(mensaje) {
        // Mostrar el mensaje de error y cambiar la visibilidad del div de errores
        const divErrores = document.getElementById('errores')
        divErrores.style.display = 'block'
        
        const mensajeError = document.createElement('p')
        mensajeError.textContent = mensaje
        divErrores.appendChild(mensajeError)
    } 

    pulsarIrLibros() {
        this.controlador.verVista(Vista.vlistarlibros) // Cambia a la vista listar libros
    }
}   
