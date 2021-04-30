import { Tag } from "../tag/tag.model"
import { Iexpert} from "./iexpert.interface"
export class Expert implements Iexpert {
  id: number
  autonomo: string
  condiciones_porcentaje: number
  created_at: Date
  updated_at: Date
  condiciones_precio_hora: number
  credenciales_correo: string
  credenciales_correo_password: string
  disponibilidad: string
  estado: string
  estado_motivo: string
  fichero_cv: string
  fichero_foto: string
  modalidad: string
  nif: string
  nombre: string
  observaciones: string
  origen: string
  puntuacion: number
  etiquetas: Tag[]
  telefono: string
  correo: string
  ciudad: string

  constructor(id: number, autonomo: string, condiciones_porcentaje: number, created_at: Date, updated_at: Date, condiciones_precio_hora: number,credenciales_correo: string, credenciales_correo_password: string, disponibilidad: string, estado: string,
    estado_motivo: string, fichero_cv: string, fichero_foto: string, modalidad: string, nif: string, nombre: string, observaciones: string, origen: string, puntuacion: number,etiquetas: Tag[],telefono:string,correo:string,ciudad:string){

      this.id = id;
      this.autonomo=autonomo;
      this.condiciones_porcentaje=condiciones_porcentaje;
      this.created_at= created_at;
      this.updated_at = updated_at;
      this.condiciones_precio_hora = condiciones_precio_hora;
      this.credenciales_correo=credenciales_correo;
      this.credenciales_correo_password = credenciales_correo_password;
      this.disponibilidad = disponibilidad;
      this.estado = estado;
      this.estado_motivo = estado_motivo;
      this.fichero_cv = fichero_cv;
      this.fichero_foto = fichero_foto;
      this.modalidad = modalidad;
      this.nif = nif;
      this.nombre = nombre;
      this.observaciones=observaciones;
      this.origen= origen;
      this.puntuacion= puntuacion;
      this.etiquetas = etiquetas;
      this.correo = correo;
      this.ciudad = ciudad;
      this.telefono = telefono;
    }
}




 /*  constructor(id: number, name: string, creator:string, created_at: Date, updated_at: Date) {
    this.id = id
    this.name = name
    this.creator = creator
    this.created_at = created_at
    this.updated_at = updated_at
  }
 */
