import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from 'src/app/models/tag/tag.model';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-create-tag-page',
  templateUrl: './create-tag-page.component.html',
  styleUrls: ['./create-tag-page.component.scss']
})
export class CreateTagPageComponent implements OnInit {

  constructor(private tagService: TagService, private snackBar: SnackbarService, private router: Router) { }

  ngOnInit(): void {
  }

  createTag(tag:Tag){
    this.tagService.createTag(tag).subscribe(()=>
    {
      this.snackBar.openSnackBar("La etiqueta se ha creado correctamente")
      this.router.navigate(['/tags'])
    }, error => {
      this.snackBar.openSnackBar("ERROR: La etiqueta no se pudo crear")
    })
  }
}
