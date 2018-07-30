import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles-note-list',
  templateUrl: './articles-note-list.component.html',
  styleUrls: ['./articles-note-list.component.css']
})
export class ArticlesNoteListComponent implements OnInit {

  @Input() newNote;

  constructor() { }

  ngOnInit() {
    console.log(this.newNote);
  }

}
