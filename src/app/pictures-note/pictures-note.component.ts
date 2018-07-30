import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pictures-note',
  templateUrl: './pictures-note.component.html',
  styleUrls: ['./pictures-note.component.css']
})
export class PicturesNoteComponent{

  url:any;
  notes = [
    {
      title: "Party",
      description: "At Rohan's house tonight...!!",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG"
    }
  ];

  @ViewChild('pictureNote') pictureNoteApp: NgForm;

  constructor() { }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event:any) => {
            this.url = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    }
  }

  onPictureNoteSubmit(){
    let newTitle = this.pictureNoteApp.value.title;
    let newDescription = this.pictureNoteApp.value.description;
    let newImage = this.url;
    this.notes.push({title: newTitle, description: newDescription, image: newImage});
    this.pictureNoteApp.reset();
    this.url="";
  }

}
