import { FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter } from '../models/expert/filter/filter.model';
import { Tag } from '../models/tag/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  url: string = 'https://backexperttag.herokuapp.com/API/etiquetas'

  constructor(private http:HttpClient) { }


  retrieveAllTags(filter: Filter): Observable<any>{

    this.url ='https://backexperttag.herokuapp.com/API/etiquetas?'

    if(filter.nombre!='')
    this.url = this.url + `nombre=${filter.nombre}&`
    this.url = this.url + `pagina=${filter.paginas}`
    if(filter.limite!=-1){
      this.url = this.url + `&limite=${filter.limite}`
    }
    return this.http.get(this.url)

  }

  eraseTag(id:number): Observable<any>{

    this.url=`https://backexperttag.herokuapp.com/API/etiquetas/${id}`
    return this.http.delete(this.url);

  }

  createTag(tag:Tag): Observable<any>{

    this.url=`https://backexperttag.herokuapp.com/API/etiquetas`
    let body ={
      nombre: tag.nombre,
      creador: "Adrián Núñez"
    }
    return this.http.post(this.url,body);

  }




}
