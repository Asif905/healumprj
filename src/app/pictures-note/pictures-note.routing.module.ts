import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { PicturesNoteComponent } from "./pictures-note.component";

const pictureRoute: Routes =[
    { path: 'pictureNote', component: PicturesNoteComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(pictureRoute)
    ],
    exports: [RouterModule]
})
export class PictureNoteRoutingModule{

}