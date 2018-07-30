import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-articles-note',
  templateUrl: './articles-note.component.html',
  styleUrls: ['./articles-note.component.css']
})
export class ArticlesNoteComponent implements OnInit {

  @ViewChild('addArticle') articleNoteApp: NgForm;

  notes = [
    {
      title: "Party",
      description: "At Rohan's house tonight...!!"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onArticleSubmit(){
    let newtitle = this.articleNoteApp.value.title;
    let newdescription = this.articleNoteApp.value.description;
    this.notes.push({title: newtitle, description: newdescription});
    this.articleNoteApp.reset();
  }

}
