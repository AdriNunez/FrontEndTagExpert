import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag/tag.model';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})
export class TagPageComponent implements OnInit {

  tagList : Tag[]= [];
  constructor(private tagService : TagService) { }

  ngOnInit(): void {


  }

}
