import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesNoteListComponent } from './pictures-note-list.component';

describe('PicturesNoteListComponent', () => {
  let component: PicturesNoteListComponent;
  let fixture: ComponentFixture<PicturesNoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturesNoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
