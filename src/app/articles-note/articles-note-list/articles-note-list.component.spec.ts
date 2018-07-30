import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesNoteListComponent } from './articles-note-list.component';

describe('ArticlesNoteListComponent', () => {
  let component: ArticlesNoteListComponent;
  let fixture: ComponentFixture<ArticlesNoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesNoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
