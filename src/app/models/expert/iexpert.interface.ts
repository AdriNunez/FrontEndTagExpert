import { Tag } from "../tag/tag.model";

export interface Iexpert {
  id: number,
  autonomo: string,
  condiciones_porcentaje: number,
  created_at: Date,
  updated_at: Date,
  condiciones_precio_hora: number,
  credenciales_correo: string,
  credenciales_correo_password: string,
  disponibilidad: string,
  estado: string,
  estado_motivo: string,
  fichero_cv: string,
  fichero_foto: string,
  modalidad: string,
  nif: string
  nombre: string,
  observaciones: string,
  origen: string,
  puntuacion: number,
  etiquetas: Tag[]
}
