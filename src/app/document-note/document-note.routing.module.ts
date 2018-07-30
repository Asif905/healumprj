import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { DocumentNoteComponent } from "./document-note.component";

const documentRoute: Routes =[
    { path: 'documentNote', component: DocumentNoteComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(documentRoute)
    ],
    exports: [RouterModule]
})
export class DocumentNoteRoutingModule{

}