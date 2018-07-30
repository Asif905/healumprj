import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { ArticlesNoteModule } from './articles-note/articles-note.module';
import { TextNoteModule } from './text-note/text-note.module';
import { PictureNoteModule } from './pictures-note/pictures-note.module';
import { DocumentNoteModule } from './document-note/document-note.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ArticlesNoteModule,
    TextNoteModule,
    PictureNoteModule,
    DocumentNoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
