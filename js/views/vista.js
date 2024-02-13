export class Vista {
  static vinicio = Symbol('Inicio')
  static vportada = Symbol('Portada')

  constructor(controlador, base) {
      this.controlador = controlador
      this.base = base
  }

  mostrar(ver) {
      if (ver) {
          this.base.style.display = 'block'
      } else {
          this.base.style.display = 'none'
      }
  }
}
