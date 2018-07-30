import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TextNoteComponent } from './text-note/text-note.component';
import { ArticlesNoteComponent } from './articles-note/articles-note.component';
import { PicturesNoteComponent } from './pictures-note/pictures-note.component';
import { DocumentNoteComponent } from './document-note/document-note.component';
import { AppRoutingModule } from './app.routing.module';
import { TextNoteListComponent } from './text-note/text-note-list/text-note-list.component';
import { ArticlesNoteListComponent } from './articles-note/articles-note-list/articles-note-list.component';
import { DocumentNoteListComponent } from './document-note/document-note-list/document-note-list.component';
import { PicturesNoteListComponent } from './pictures-note/pictures-note-list/pictures-note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextNoteComponent,
    ArticlesNoteComponent,
    PicturesNoteComponent,
    DocumentNoteComponent,
    TextNoteListComponent,
    ArticlesNoteListComponent,
    DocumentNoteListComponent,
    PicturesNoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
