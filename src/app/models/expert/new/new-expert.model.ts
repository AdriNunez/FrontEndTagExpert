import { Tag } from "../../tag/tag.model"

export class NewExpert {
  nombre: string
  dni: string
  tagList: Tag[]
  disponibilidad: string
  telefono: string
  correo: string
  ciudad: string



  constructor(nombre: string, dni: string, tagList: Tag[], disponibilidad: string, telefono: string, correo: string,
    ciudad: string) {

    this.nombre = nombre
    this.dni = dni
    this.tagList = tagList
    this.disponibilidad = disponibilidad
    this.telefono = telefono
    this.correo = correo
    this.ciudad = ciudad

    }
}
