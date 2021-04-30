import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { PopupComponent } from 'src/app/components/popup/popup.component';
import { Filter } from 'src/app/models/expert/filter/filter.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { TagService } from 'src/app/services/tag.service';



@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit,DoCheck {

  dataSource : any;

 tags : Tag[]= [];

 displayedColumns: string[] = ['name', 'creator', 'creation_date'];

 filters : Filter = new Filter("","","","",0,5)

 pageSizeOptions: number[] = [5,10, 15, 20];

 limit = [
  { value: "5", viewValue: '5' },
  { value: "10", viewValue: '10' },
  { value: "15", viewValue: '15' },
  { value: "20", viewValue: '20' },
  { value: "50", viewValue: '50' },
  { value: "100", viewValue: '100' },
  { value: "200", viewValue: '200' },
  { value: "1000", viewValue: '1000' }
];

  mouseoverIndex :number = -1;

  constructor(private tagService : TagService, public popup: MatDialog) { }

  ngDoCheck(): void {

    this.dataSource = this.tags;
  }

  ngOnInit(): void {

    this.retrieveAll();

  }
  applyFilter(event:Event){
    this.filters.nombre= (event.target as HTMLInputElement).value;
    this.retrieveAll();
  }

  eraseTag(id:number){

      const dialogRef = this.popup.open(PopupComponent, {
        width: '400px',
        data: this.tags[id]
      });

      dialogRef.afterClosed().subscribe(result => {
          this.retrieveAll();
      });
    }

    getPaginatorData(event:string){
     /*  this.filters.paginas = event.pageIndex * event.pageSize
      this.filters.limite = event.pageSize */
      this.filters.limite = Number(event)
      this.retrieveAll()
    }

    showButton(index:number){
      this.mouseoverIndex=index;
    }


  private retrieveAll() {

    this.tagService.retrieveAllTags(this.filters).subscribe(data=>{
      this.tags=data;
      })

  }

}
