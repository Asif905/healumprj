import { NgModule } from "@angular/core";
import { ArticlesNoteComponent } from "./articles-note.component";
import { ArticlesNoteListComponent } from "./articles-note-list/articles-note-list.component";
import { ArticlesNoteRoutingModule } from "./articles-note.routing.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        ArticlesNoteComponent,
        ArticlesNoteListComponent
    ],
    imports: [CommonModule, FormsModule, ArticlesNoteRoutingModule]
})
export class ArticlesNoteModule{

}