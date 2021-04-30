import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expert } from 'src/app/models/expert/expert.model';
import { Filter } from 'src/app/models/expert/filter/filter.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input()experto :any
  formDetail:FormGroup= new FormGroup({})
  formDetailName:FormGroup= new FormGroup({})
  formDetailObservations:FormGroup= new FormGroup({})
  @Output() emitExpert: EventEmitter<Expert> = new EventEmitter<Expert>()
  taglist: Tag[] = []

   dispo = [
    {value:"Mañana",viewValue:"Mañana"},
    {value:"Tarde",viewValue:"Tarde"},
    {value:"Jornada Completa",viewValue:"Jornada Completa"}
  ]

  status = [
    {value:"Validado",viewValue:"Validado"},
    {value:"Pdte. Validar",viewValue:"Pdte. Validar"}
  ]

  origin = [
    {value:"Web",viewValue:"Web"},
    {value:"Presencial",viewValue:"Presencial"}
  ]
  score = [
    { value: "0", viewValue: 'Falta' },
    { value: "15", viewValue: '15' },
    { value: "25", viewValue: '25' },
    { value: "55", viewValue: '55' },
    { value: "75", viewValue: '75' },
    { value: "100", viewValue: '100' },
  ];
  listaEtiquetas: Tag[] = []
  seleccionarTag: [{ value: string, viewValue: string }] = [{ value: "-1", viewValue: '' }]
  filters : Filter = new Filter("","","","",0,-1)


  constructor(private formBuilder : FormBuilder, private snackBar : SnackbarService, private tagService : TagService) { }

  ngOnInit(): void {

    this.conversor()
    this.taglist=this.experto.etiquetas
    this.formDetailName = this.formBuilder.group({
      nombre: [this.experto.nombre, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      dni: [this.experto.nif]
      })
      this.formDetail = this.formBuilder.group({
        telefono:[this.experto.contacto_telefono, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(12)])],
        correo: [this.experto.contacto_email, Validators.compose([Validators.email])],
        ciudad: [this.experto.contacto_ciudad]
        })
     this.formDetailObservations = this.formBuilder.group({
       observaciones: [this.experto.observaciones],
        motivo: [this.experto.estado_motivo]
        })
  }
  setDispo(disponibilidad: string){
    this.experto.disponibilidad=disponibilidad
    this.updateExpert()
  }

  setEstado(estado: string){

    this.experto.estado=estado
    this.updateExpert()
  }
  setPuntuacion(puntuacion: string){
    this.experto.puntuacion=Number(puntuacion)
    this.updateExpert()
  }
  setOrigen(origen: string){
    this.experto.origen=origen
    this.updateExpert()
  }
  aniadirEtiqueta(id:string){
    if (Number(id) == -1)
      this.conversor()
    let etiquetaSeleccionada=this.listaEtiquetas.filter((tag) => tag.id == Number(id))[0]
    this.taglist.push(etiquetaSeleccionada)
    this.updateExpert();
  }
  borrarEtiqueta(tag:Tag){
    let index=0;
    for (var i = 0; i < this.taglist.length; i++){
      if (this.taglist[i].id == tag.id)
        index = i
    }
    this.taglist.splice(index, 1)
    this.updateExpert();

  }

  updateExpert(){
        if(this.formDetail.valid&&this.formDetailName.valid&&this.formDetailObservations.valid){
      this.emitExpert.emit(new Expert(this.experto.id,"",0,new Date(),new Date(),0,"","",this.experto.disponibilidad,this.experto.estado,this.formDetailObservations.value.motivo,"","","",this.formDetailName.value.dni,this.formDetailName.value.nombre,this.formDetailObservations.value.observaciones,
      this.experto.origen,this.experto.puntuacion,this.taglist,this.formDetail.value.telefono,
        this.formDetail.value.correo,this.formDetail.value.ciudad))
    }
    else{
      this.snackBar.openSnackBar("Por favor, rellene los campos correctamente")
    }
 }

  private conversor(){
    this.tagService.retrieveAllTags(this.filters).subscribe(data=>{
      this.listaEtiquetas=data;
      this.listaEtiquetas.forEach(etiqueta => {
     this.seleccionarTag.push({ value: etiqueta.id.toString(), viewValue: etiqueta.nombre })
      });
      })

  }
}
