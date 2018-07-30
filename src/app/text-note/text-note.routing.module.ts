import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { TextNoteComponent } from "./text-note.component";

const textRoute: Routes =[
    { path: 'textNote', component: TextNoteComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(textRoute)
    ],
    exports: [RouterModule]
})
export class TextNoteRoutingModule{

}