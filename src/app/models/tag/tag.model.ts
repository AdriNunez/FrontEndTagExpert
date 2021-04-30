import { ITag } from "./itag.interface"

export class Tag implements ITag{
  id: number
  nombre: string
  creador: string
  created_at: Date
  updated_at: Date

  constructor(id: number, name: string, creator:string, created_at: Date, updated_at: Date) {
    this.id = id
    this.nombre = name
    this.creador = creator
    this.created_at = created_at
    this.updated_at = updated_at
  }
}
