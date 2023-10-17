import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  text: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  editorOnInit(event: any) {
    // const quill : Quill = event.editor;
    // console.log('quill', quill);
  }

}
