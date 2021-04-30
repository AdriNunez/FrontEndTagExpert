import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Tag } from 'src/app/models/tag/tag.model';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  formTag:FormGroup= new FormGroup({})

  @Output() emitTag: EventEmitter<Tag> = new EventEmitter<Tag>()

  constructor(private formBuilder : FormBuilder, private snackBar : SnackbarService) { }

  ngOnInit(): void {
    this.formTag=this.formBuilder.group({
      name:["", Validators.compose([Validators.required,Validators.minLength(1), Validators.maxLength(15)])]

    })
  }

  saveTag(){
    if(this.formTag.valid){
      this.emitTag.emit(new Tag(0,this.formTag.value.name,"",new Date(),new Date()))
    }
    else{
      this.snackBar.openSnackBar("La etiqueta no es válida(tamaño incorrecto)")
    }
 }
}
