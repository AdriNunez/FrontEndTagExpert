import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  titleNav:string=""
  boton:string=""
  showButton:boolean=true
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.titleNav ="Expertos"
    this.boton = "+ Nuevo experto"

  }
  changeTitle(title:string){
    this.showButton =true
    this.titleNav= title =="experts" ? "Expertos" : "Etiquetas"
    this.boton = this.titleNav == "Expertos" ? "+ Nuevo experto" : "+ Añadir etiqueta"
  }
}
