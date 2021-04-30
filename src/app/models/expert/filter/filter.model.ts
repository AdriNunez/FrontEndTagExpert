export class Filter {
  nombre: string
  estado: string
  tagId: string
  puntuacion: string
  paginas: number
  limite: number

  constructor(name: string,state: string,  tagId: string,  score: string,  page: number, limit: number) {
    this.nombre = name
    this.estado = state
    this.tagId = tagId
    this.puntuacion = score
    this.paginas = page
    this.limite = limit
  }
}
