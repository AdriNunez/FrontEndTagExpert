import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common'
import { FormGroup } from '@angular/forms';
import { ExpertService } from 'src/app/services/expert.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-expert-details-page',
  templateUrl: './expert-details-page.component.html',
  styleUrls: ['./expert-details-page.component.scss']
})
export class ExpertDetailsPageComponent implements OnInit {
  formDetail:FormGroup= new FormGroup({})

  experto:any;

  constructor(private location: Location,private expertService: ExpertService,private snackBar: SnackbarService) { }

  ngOnInit(): void {

    if (this.location.getState()) {
      this.experto = this.location.getState()
    }
  }
  updateExpert(experto : any){
    this.expertService.updateExpert(experto).subscribe(()=>
    {
      this.snackBar.openSnackBar("El experto se ha actualizado correctamente")
    }, error => {
      this.snackBar.openSnackBar("ERROR: El experto no se pudo actualizar")
    })
  }
}
