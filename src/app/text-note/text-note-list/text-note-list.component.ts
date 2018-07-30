import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-note-list',
  templateUrl: './text-note-list.component.html',
  styleUrls: ['./text-note-list.component.css']
})
export class TextNoteListComponent implements OnInit {

  @Input() newNote;

  constructor() { }

  ngOnInit() {
  }

}
