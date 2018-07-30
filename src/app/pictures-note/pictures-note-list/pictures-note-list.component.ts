import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pictures-note-list',
  templateUrl: './pictures-note-list.component.html',
  styleUrls: ['./pictures-note-list.component.css']
})
export class PicturesNoteListComponent implements OnInit {

  @Input() newNote;
  
  constructor() { }

  ngOnInit() {
  }

}
