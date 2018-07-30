import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DocumentNoteRoutingModule } from "./document-note.routing.module";
import { DocumentNoteComponent } from "./document-note.component";
import { DocumentNoteListComponent } from "./document-note-list/document-note-list.component";

@NgModule({
    declarations:[
        DocumentNoteComponent,
        DocumentNoteListComponent
    ],
    imports: [CommonModule, FormsModule, DocumentNoteRoutingModule]
})
export class DocumentNoteModule{

}