import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/state/post';

@Component({
  selector: 'post-detail-viewer',
  templateUrl: './post-detail-viewer.component.html',
  styleUrls: ['./post-detail-viewer.component.css']
})
export class PostDetailViewerComponent implements OnInit {

  @Input() post:Post;

  constructor() { }

  ngOnInit(): void {
  }

}
