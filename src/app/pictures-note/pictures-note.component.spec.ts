import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesNoteComponent } from './pictures-note.component';

describe('PicturesNoteComponent', () => {
  let component: PicturesNoteComponent;
  let fixture: ComponentFixture<PicturesNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturesNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
