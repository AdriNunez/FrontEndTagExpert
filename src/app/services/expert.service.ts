import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expert } from '../models/expert/expert.model';
import { Filter } from '../models/expert/filter/filter.model';
import { NewExpert } from '../models/expert/new/new-expert.model';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  url: string = 'https://backexperttag.herokuapp.com/API/expertos'

  constructor(private http:HttpClient) { }

  retrieveAllExperts(filter: Filter): Observable<any>{

    this.url = 'https://backexperttag.herokuapp.com/API/expertos?'

    if (filter.estado != '')
      this.url = this.url + `estado=${filter.estado}&`

    if (filter.tagId != '')
    this.url = this.url + `etiqueta=${filter.tagId}&`

    if (filter.nombre != '')
      this.url = this.url + `nombre=${filter.nombre}&`

    if (filter.puntuacion != '')
      this.url = this.url + `puntuacion=${filter.puntuacion}&`

    this.url = this.url + `pagina=${filter.paginas}&limite=${filter.limite}`
    return this.http.get(this.url)

  }
  createExpert(expert: NewExpert): Observable<any>{
    let body = {
      nombre: expert.nombre,
      nif: expert.dni,
      etiquetas: expert.tagList,
      disponibilidad: expert.disponibilidad,
      contacto_telefono: expert.telefono,
      contacto_email: expert.correo,
      contacto_ciudad: expert.ciudad,
      estado: "Pdte. Validar",
      puntuacion:0
    }
    return this.http.post('https://backexperttag.herokuapp.com/API/expertos', body)
  }

  updateExpert(expert: Expert): Observable<any>{

    let body = {
      id: expert.id,
      nombre: expert.nombre,
      created_at: expert.created_at,
      updated_at: expert.updated_at,
      estado_motivo: expert.estado_motivo,
      disponibilidad: expert.disponibilidad,
      modalidad: expert.modalidad,
      contacto_telefono: expert.telefono,
      contacto_email: expert.correo,
      contacto_ciudad: expert.ciudad,
      condiciones_porcentaje: expert.condiciones_porcentaje,
      condiciones_precio_hora: expert.condiciones_precio_hora,
      puntuacion: expert.puntuacion,
      nif: expert.nif,
      credenciales_correo: expert.credenciales_correo,
      credenciales_correo_password: expert.credenciales_correo_password,
      fichero_foto: expert.fichero_foto,
      fichero_cv: expert.fichero_cv,
      observaciones: expert.observaciones,
      origen: expert.origen,
      estado: expert.estado,
      etiquetas: expert.etiquetas
    }
   return this.http.put(`https://backexperttag.herokuapp.com/API/expertos/${expert.id}`, body)

  }
}
