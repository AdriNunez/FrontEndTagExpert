import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Input() puntuacion : number = 0
  texto : string = ""
  constructor() { }

  ngOnInit(): void {
    if(this.puntuacion!=null){
      this.texto=this.puntuacion.toString()
    }
  }
  getColor() {
    switch (this.puntuacion){
      case 15:
        return '#D66464';
      case 25:
        return '#DEA876';
      case 55:
        return '#F0CE76';
      case 75:
        return '#B1F0A1';
      case 100:
        return '#4ADEBB';
      default:
        this.texto = 'Falta'
        return '#C7C8CD';
    }
  }
}
