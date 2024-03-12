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
        //this.autor = document.getElementById('autor')
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
    validarFormulario() {
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
    
        /*if (this.autor.value.trim().length < 2) {
            this.mostrarError('El nombre del autor debe tener al menos 2 caracteres.')
            this.autor.classList.add('input-error')
        } 
        else {
            this.autor.classList.remove('input-error')
            this.autor.classList.add('input-correct')
        }*/
    
        if (!/^\d{10}$/.test(this.isbn.value.trim())) {
            this.mostrarError('El ISBN debe tener exactamente 10 dígitos numéricos.')
            this.isbn.classList.add('input-error')
        } 
        else {
            this.isbn.classList.remove('input-error')
            this.isbn.classList.add('input-correct')
        }
    
        console.log('¡Has pulsado el botón "Insertar Libro"!')

        // Construir el objeto con los atributos del formulario
        const obra = {
            titulo: this.titulo.value.trim(),
            //autor: this.autor.value.trim(),
            anio_publicacion: this.anio_publicacion.value.trim(),
            isbn: this.isbn.value.trim()
        }
       
        // Llamar al método crearObra en restService y manejar la respuesta
        console.log(this.restService.crearObra(obra))
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

    pulsarIrLibros () {
        this.controlador.verVista(Vista.vlistarlibros)
        this.verVista(Vista.vlistarlibros); // Cambiar a la vista ListarLibros
    // Llamar al método listar en la vista ListarLibros para actualizar la lista de libros
    this.vistas[Vista.vlistarlibros].listar();
    }
}
