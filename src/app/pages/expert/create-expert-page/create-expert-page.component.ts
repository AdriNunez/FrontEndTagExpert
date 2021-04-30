import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpertService } from 'src/app/services/expert.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-create-expert-page',
  templateUrl: './create-expert-page.component.html',
  styleUrls: ['./create-expert-page.component.scss']
})
export class CreateExpertPageComponent implements OnInit {

  constructor(private expertService: ExpertService,private snackBar: SnackbarService, private router: Router) { }

  ngOnInit(): void {
  
  }

  createExpert(experto : any){
    this.expertService.createExpert(experto).subscribe(()=>
    {
      this.snackBar.openSnackBar("El experto se ha creado correctamente")
      this.router.navigate(['/experts'])
    }, error => {
      this.snackBar.openSnackBar("ERROR: El experto no se pudo crear")
    })
  }
}
