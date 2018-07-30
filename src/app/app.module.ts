import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TextNoteComponent } from './text-note/text-note.component';
import { ArticlesNoteComponent } from './articles-note/articles-note.component';
import { PicturesNoteComponent } from './pictures-note/pictures-note.component';
import { DocumentNoteComponent } from './document-note/document-note.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextNoteComponent,
    ArticlesNoteComponent,
    PicturesNoteComponent,
    DocumentNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
