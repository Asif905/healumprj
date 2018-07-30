import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-text-note',
  templateUrl: './text-note.component.html',
  styleUrls: ['./text-note.component.css']
})
export class TextNoteComponent implements OnInit {

  @ViewChild('addText') textNoteApp: NgForm;
  notes = ['Dinner at 10 PM','Set Goals'];

  constructor() { }

  ngOnInit() {
  }

  onTextSubmit(){
    let textAdded = this.textNoteApp.value.textnote;
    this.notes.push(textAdded);    
    this.textNoteApp.reset();
  }

}
