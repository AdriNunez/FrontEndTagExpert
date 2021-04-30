import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() titleNavbar:string=""
  @Input() boton:string=""
  @Input() visiblebutton:boolean=true

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.visiblebutton=true

  }

  create(){
 /*    this.visiblebutton=false */

    if(this.titleNavbar == "Expertos"){
//      this.titleNavbar = "Nuevo experto"
      this.router.navigate(['/createExpert'])

    } else{
 //     this.titleNavbar = "Nueva etiqueta"
      this.router.navigate(['/createTag'])
    }
  }
}
