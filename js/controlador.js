import {Vista} from './views/vista.js'
import {MenuInicial} from './views/vinicio.js'
import {AltaAutor} from './views/valtaautor.js'
import {AltaLibro} from './views/valtalibro.js'
import {ListarAutores} from './views/vlistarautores.js'
import {ListarLibros} from './views/vlistarlibros.js'
class Controlador {

    vistas = new Map()

    constructor(){
        //referencia de la interfaz
        const divInicio = document.getElementById('divInicio')
        const divInsertarAutores = document.getElementById('divInsertarAutores')
        const divInsertarLibros = document.getElementById('divInsertarLibros')
        const divListarLibros = document.getElementById('divListarLibros')
        const divListarAutores = document.getElementById('divListarAutores')
       
        //creacion de las vistas
        this.vistas.set(Vista.vinicio, new MenuInicial(this, divInicio))
        this.vistas.set(Vista.valtaautor, new AltaAutor(this, divInsertarAutores))
        this.vistas.set(Vista.valtalibro, new AltaLibro(this, divInsertarLibros))
        this.vistas.set(Vista.vlistarautores, new ListarAutores(this, divListarAutores))
        this.vistas.set(Vista.vlistarlibros, new ListarLibros(this, divListarLibros))
       
        this.verVista(Vista.vportada)

        // Mostrar VistaListarLibros después de tres segundos
        setTimeout(() => {
            this.verVista(Vista.vinicio)
        }, 3000)

        const btnAniadirLibro = document.getElementById('aniadirLibro')
        btnAniadirLibro.addEventListener('click', () => {
            this.verVista(Vista.vInsertarLibro)
        })
    }

    verVista(vista) {
        this.ocultarVistas()
        this.vistas.get(vista).mostrar(true)
    }

    ocultarVistas() {
        for(const vista of this.vistas.values())
            vista.mostrar(false)
    }
}

window.onload = () => { 
    new Controlador()
}
