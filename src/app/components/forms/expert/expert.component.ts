import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Filter } from 'src/app/models/expert/filter/filter.model';
import { NewExpert } from 'src/app/models/expert/new/new-expert.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.scss']
})
export class ExpertComponent implements OnInit {

  formExpert:FormGroup= new FormGroup({})

  @Output() emitExpert: EventEmitter<NewExpert> = new EventEmitter<NewExpert>()

  taglist: Tag[] = []

  disponibilidad: string = ""

  dispo = [
    {value:"Mañana",viewValue:"Mañana"},
    {value:"Tarde",viewValue:"Tarde"},
    {value:"Jornada Completa",viewValue:"Jornada Completa"}
  ]


  listaEtiquetas: Tag[] = []
  seleccionarTag: [{ value: string, viewValue: string }] = [{ value: "-1", viewValue: '' }]
  filters : Filter = new Filter("","","","",0,-1)

  constructor(private formBuilder : FormBuilder, private snackBar : SnackbarService, private tagService : TagService) { }

  ngOnInit(): void {
    this.conversor()
    this.formExpert = this.formBuilder.group({
      nombre: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      dni: ['', Validators.compose([Validators.minLength(8), Validators.maxLength(9)])],
      telefono:['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
      correo: ['', Validators.compose([Validators.email])],
      ciudad: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(70)])]

    })
  }
  setDispo(disponibilidad: string){
    this.disponibilidad=disponibilidad
  }

  aniadirEtiqueta(id:string){
    if (Number(id) == -1)
      this.conversor()
    let etiquetaSeleccionada=this.listaEtiquetas.filter((tag) => tag.id == Number(id))[0]
    this.taglist.push(etiquetaSeleccionada)
  }
  borrarEtiqueta(tag:Tag){
    let index=0;
    for (var i = 0; i < this.taglist.length; i++){
      if (this.taglist[i].id == tag.id)
        index = i
    }
    this.taglist.splice(index, 1)

  }

  saveExpert(){
    if(this.formExpert.valid){
      this.emitExpert.emit(new NewExpert(this.formExpert.value.nombre,this.formExpert.value.dni,this.taglist,this.disponibilidad,this.formExpert.value.telefono,
        this.formExpert.value.correo,this.formExpert.value.ciudad))
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
