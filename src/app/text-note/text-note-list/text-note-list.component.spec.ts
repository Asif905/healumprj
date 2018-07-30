import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNoteListComponent } from './text-note-list.component';

describe('TextNoteListComponent', () => {
  let component: TextNoteListComponent;
  let fixture: ComponentFixture<TextNoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextNoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
