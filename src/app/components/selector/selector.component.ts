import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  @Input() data = [{ value: '', viewValue: '' }]

  @Input() placeHolder: string = ''
  @Output() emitData: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  select(event:any){
    if(event.value!=undefined){
      this.emitData.emit(event.value)
    }
  }

}
