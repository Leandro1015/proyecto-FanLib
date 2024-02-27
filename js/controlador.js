import {Vista} from './views/vista.js'
import {Portada} from './views/vportada.js'
import {Inicio} from './views/vinicio.js'
import {AltaAutor} from './views/valtaautor.js'
import {AltaLibro} from './views/valtalibro.js'
import {ListarLibros} from './views/vlistarlibros.js'
import {ListarAutores} from './views/vlistarautores.js'
class Controlador {

    vistas = new Map()

    constructor(){
        // Referencia de la interfaz
        const divPortada = document.getElementById('divPortada')
        const divInicio = document.getElementById('divInicio')
        const divInsertarAutores = document.getElementById('divInsertarAutores')
        const divInsertarLibros = document.getElementById('divInsertarLibros')
        const divListarLibros = document.getElementById('divListarLibros')
        const divListarAutores = document.getElementById('divListarAutores')
       
        // Creación de las vistas
        this.vistas.set(Vista.vportada, new Portada(this, divPortada))
        this.vistas.set(Vista.vinicio, new Inicio(this, divInicio))
        this.vistas.set(Vista.valtaautor, new AltaAutor(this, divInsertarAutores))
        this.vistas.set(Vista.valtalibro, new AltaLibro(this, divInsertarLibros))
        this.vistas.set(Vista.vlistarlibros, new ListarLibros(this, divListarLibros))
        this.vistas.set(Vista.vlistarautores, new ListarAutores(this, divListarAutores))
       
        this.verVista(Vista.vportada)

        // Mostrar VistaInicio después de tres segundos
        setTimeout(() => {
            this.verVista(Vista.vinicio)
        }, 3000)
    }

    
    // Método para cambiar la vista actual
    verVista(vista) {
        this.ocultarVistas()
        this.vistas.get(vista).mostrar(true)
    }

    // Método para ocultar todas las vistas
    ocultarVistas() {
        for(const vista of this.vistas.values())
            vista.mostrar(false)
    }
}

window.onload = () => { 
    new Controlador()
}
