import { Component, DoCheck, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Expert } from 'src/app/models/expert/expert.model';
import { Filter } from 'src/app/models/expert/filter/filter.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { ExpertService } from 'src/app/services/expert.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-expert-list',
  templateUrl: './expert-list.component.html',
  styleUrls: ['./expert-list.component.scss']
})
export class ExpertListComponent implements OnInit, DoCheck {

  dataSource : any;
  experts : Expert[]= [];
  displayedColumns: string[] = ['name', 'estado','etiqueta', 'puntuacion'];
  status = [
    {value:"Validado",viewValue:"Validado"},
    {value:"Pdte. Validar",viewValue:"Pdte. Validar"},
    {value:"",viewValue:"Todos"}
  ]
  score = [
    { value: "0", viewValue: 'Falta' },
    { value: "15", viewValue: '15' },
    { value: "25", viewValue: '25' },
    { value: "55", viewValue: '55' },
    { value: "75", viewValue: '75' },
    { value: "100", viewValue: '100' },
  ];
  filters : Filter = new Filter("","","","",0,5)
 /*  pageSizeOptions: number[] = [5,10, 15, 20]; */
  tagFiltrada : Tag[] = [];
  limit = [
    { value: "5", viewValue: '5' },
    { value: "10", viewValue: '10' },
    { value: "15", viewValue: '15' },
    { value: "20", viewValue: '20' },
    { value: "50", viewValue: '50' },
    { value: "100", viewValue: '100' },
    { value: "200", viewValue: '200' },
    { value: "1000", viewValue: '1000' }
  ];
  constructor(private expertService : ExpertService, private tagService : TagService) { }

  ngDoCheck(): void {
    this.dataSource =this.experts;
  }

  ngOnInit(): void {

    this.getExperts()

  }
  applyFilter(event:Event){
    this.reiniciarPagina()
    this.filters.nombre= (event.target as HTMLInputElement).value;
    this.getExperts();
  }
  applyFilterTag(event:Event){
    this.reiniciarPagina()
    let nombreEtiqueta= (event.target as HTMLInputElement).value;
      this.tagService.retrieveAllTags(new Filter(nombreEtiqueta,"","","",0,1)).subscribe(data=>{
      if(data.length>0){
      this.tagFiltrada=data
      this.filters.tagId=this.tagFiltrada[0].id.toString()
      }
      this.getExperts();
      })


  }
  statusFilter(event:string){
    this.reiniciarPagina()
    this.filters.estado=event
    this.getExperts()

  }

  scoreFilter(event:string){
    this.reiniciarPagina()
    this.filters.puntuacion=event
    this.getExperts()

  }
  getPaginatorData(event:string){
/*     this.filters.paginas += 1 */
    this.filters.limite = Number(event)
    this.getExperts()
  }

  private getExperts() {

    this.expertService.retrieveAllExperts(this.filters).subscribe(data=>{
      this.experts=data;

    })
  }
  private reiniciarPagina(){
    this.filters.paginas=0;
    this.filters.limite=5;
  }
}

