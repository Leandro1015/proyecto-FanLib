import { Vista } from './views/vista.js'
import { Portada } from './views/vportada.js'
import { Inicio } from './views/vinicio.js'

class Controlador {
    vistas = new Map();

    constructor() {
        // Referencia de la interfaz
        const divPortada = document.getElementById('VistaPortada')
        const divInicio = document.getElementById('divInicio')

        // Creación de las vistas
        this.vistas.set(Vista.vportada, new Portada(this, divPortada))
        this.vistas.set(Vista.vinicio, new Inicio(this, divInicio))
        
        this.verVista(Vista.vportada);
    }

    verVista (vista) {
        this.ocultarVistas()
        this.vistas.get(vista).mostrar(true)
    }

    ocultarVistas(){
		for(const vista of this.vistas.values())
			vista.mostrar(false)
	}
}

window.onload = () => { new Controlador() };
