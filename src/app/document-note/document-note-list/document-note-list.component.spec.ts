import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNoteListComponent } from './document-note-list.component';

describe('DocumentNoteListComponent', () => {
  let component: DocumentNoteListComponent;
  let fixture: ComponentFixture<DocumentNoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentNoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
