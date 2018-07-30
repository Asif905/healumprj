import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesNoteComponent } from './articles-note.component';

describe('ArticlesNoteComponent', () => {
  let component: ArticlesNoteComponent;
  let fixture: ComponentFixture<ArticlesNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
