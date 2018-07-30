import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PicturesNoteComponent } from "./pictures-note.component";
import { PicturesNoteListComponent } from "./pictures-note-list/pictures-note-list.component";
import { PictureNoteRoutingModule } from "./pictures-note.routing.module";

@NgModule({
    declarations:[
        PicturesNoteComponent,
        PicturesNoteListComponent
    ],
    imports: [CommonModule, FormsModule, PictureNoteRoutingModule]
})
export class PictureNoteModule{

}