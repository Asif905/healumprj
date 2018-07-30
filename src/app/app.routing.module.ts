import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TextNoteComponent } from "./text-note/text-note.component";
import { ArticlesNoteComponent } from "./articles-note/articles-note.component";
import { PicturesNoteComponent } from "./pictures-note/pictures-note.component";
import { DocumentNoteComponent } from "./document-note/document-note.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'textNote', pathMatch: 'full'},
    { path: 'textNote', component: TextNoteComponent},
    { path: 'articleNote', component: ArticlesNoteComponent},
    { path: 'pictureNote', component: PicturesNoteComponent},
    { path: 'documentNote', component: DocumentNoteComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}