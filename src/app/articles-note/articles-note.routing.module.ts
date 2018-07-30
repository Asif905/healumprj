import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { ArticlesNoteComponent } from "./articles-note.component";

const articlesRoute: Routes =[
    { path: '', component: ArticlesNoteComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(articlesRoute)
    ],
    exports: [RouterModule]
})
export class ArticlesNoteRoutingModule{

}