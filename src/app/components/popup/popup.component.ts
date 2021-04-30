import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from 'src/app/models/tag/tag.model';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  tag : Tag = new Tag(0,"","",new Date(),new Date())

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    private tagService: TagService,
    private snackBar: SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: Tag) {}

    ngOnInit(): void {
      this.tag = this.data;
    }

    onNoClick(): void {
    this.dialogRef.close();
  }

    onClickErase(): void{
      this.tagService.eraseTag(this.tag.id).subscribe(data=>{

        this.snackBar.openSnackBar("Se ha borrado la etiqueta correctamente");

      }, error => {

        this.snackBar.openSnackBar("Ha habido un error en el borrado");
      })

      this.dialogRef.close();

    }
  }
