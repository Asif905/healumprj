import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TextNoteRoutingModule } from "./text-note.routing.module";
import { TextNoteComponent } from "./text-note.component";
import { TextNoteListComponent } from "./text-note-list/text-note-list.component";

@NgModule({
    declarations:[
        TextNoteComponent,
        TextNoteListComponent
    ],
    imports: [CommonModule, FormsModule, TextNoteRoutingModule]
})
export class TextNoteModule{

}