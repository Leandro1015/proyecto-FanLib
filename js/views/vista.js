export class Vista {
    static {
      Vista.vinicio = Symbol('Inicio')
      Vista.vportada = Symbol('Portada')
      Vista.valtaautor = Symbol('Añadir nuevo autor')
      Vista.valtalibro = Symbol('Añadir nuevo libro')
      Vista.vlistarautores = Symbol('Listar Autores')
      Vista.vlistarlibros = Symbol('Listar Libros')
    }
    
     // Constructor de la clase Vista
    constructor(controlador, base) {
      this.controlador = controlador
      this.base = base
    }
  
    mostrar(ver) {
      if (ver)
        this.base.style.display = 'block' // Mostrar la vista
      else 
        this.base.style.display = 'none' // Ocultar la vista
    }
}